export interface StripeConfig {
  publishableKey: string;
  clientSecret: string | Promise<string>;
  elementId: string;
  onSessionChange?: (session: StripeSession) => void;
}

export interface StripeSession {
  canConfirm: boolean;
  total: {
    total: {
      amount: string;
    };
  };
}

export interface StripeValidationResult {
  isValid: boolean;
  message: string | null;
}

export interface StripeLoadActionsResult {
  type: 'success' | 'error';
  actions?: StripeActions;
  error?: {
    message: string;
  };
}

export interface StripeConfirmResult {
  error?: {
    message: string;
  };
}

export interface StripeActions {
  updateEmail: (email: string) => Promise<StripeValidationResult>;
  confirm: () => Promise<StripeConfirmResult>;
  getSession: () => StripeSession;
}

export interface StripeCheckout {
  on: (event: 'change', callback: (session: StripeSession) => void) => void;
  loadActions: () => Promise<StripeLoadActionsResult>;
  createPaymentElement: () => {
    mount: (selector: string) => void;
  };
}

export interface StripeInstance {
  initCheckoutElementsSdk: (options: {
    clientSecret: Promise<string>;
    elementsOptions: { appearance: { theme: string } };
  }) => StripeCheckout;
}

declare global {
  interface Window {
    Stripe: (publishableKey: string) => StripeInstance;
  }
}

export const initStripe = async (config: StripeConfig): Promise<{
  checkout: StripeCheckout | null;
  actions: StripeActions | null;
}> => {
  if (!window.Stripe) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  if (!window.Stripe) {
    console.error('Stripe.js not loaded');
    return { checkout: null, actions: null };
  }

  const stripe = window.Stripe(config.publishableKey);

  const appearance = {
    theme: 'stripe',
  };

  const checkout = stripe.initCheckoutElementsSdk({
    clientSecret: typeof config.clientSecret === 'string' ? Promise.resolve(config.clientSecret) : config.clientSecret,
    elementsOptions: { appearance },
  });

  if (config.onSessionChange) {
    checkout.on('change', config.onSessionChange);
  }

  const loadActionsResult = await checkout.loadActions();
  let actions: StripeActions | null = null;

  if (loadActionsResult.type === 'success' && loadActionsResult.actions) {
    actions = loadActionsResult.actions;
  }

  const paymentElement = checkout.createPaymentElement();
  paymentElement.mount(config.elementId);

  return { checkout, actions };
};

export const validateEmail = async (
  actions: StripeActions | null,
  email: string
): Promise<StripeValidationResult> => {
  if (!actions) {
    return { isValid: true, message: null };
  }
  const updateResult = await actions.updateEmail(email);
  const isValid = updateResult.type !== 'error';
  return {
    isValid,
    message: !isValid ? updateResult.error?.message || null : null,
  };
};

export const showPaymentMessage = (
  messageText: string,
  messageContainerId: string = 'payment-message'
): void => {
  const messageContainer = document.getElementById(messageContainerId);
  if (messageContainer) {
    messageContainer.classList.remove('uno-hidden');
    messageContainer.textContent = messageText;
    setTimeout(() => {
      messageContainer.classList.add('uno-hidden');
      messageContainer.textContent = '';
    }, 4000);
  }
};

export const setLoading = (
  isLoading: boolean,
  submitId: string = 'submit',
  spinnerId: string = 'spinner',
  buttonTextId: string = 'button-text'
): void => {
  const submitBtn = document.getElementById(submitId);
  const spinner = document.getElementById(spinnerId);
  const buttonText = document.getElementById(buttonTextId);

  if (submitBtn) submitBtn.disabled = isLoading;
  if (spinner) {
    if (isLoading) {
      spinner.classList.remove('uno-hidden');
    } else {
      spinner.classList.add('uno-hidden');
    }
  }
  if (buttonText) {
    if (isLoading) {
      buttonText.classList.add('uno-hidden');
    } else {
      buttonText.classList.remove('uno-hidden');
    }
  }
};

export const confirmPayment = async (
  actions: StripeActions | null
): Promise<StripeConfirmResult> => {
  if (!actions) {
    return { error: { message: 'Stripe not initialized' } };
  }
  return await actions.confirm();
};
