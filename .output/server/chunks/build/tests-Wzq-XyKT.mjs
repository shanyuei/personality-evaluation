import { u as useGetFetch } from './useApi-BWDHtmzl.mjs';

const getTestQuestions = () => {
  return useGetFetch(`/personal/questions`);
};
const getPlanList = () => {
  return useGetFetch(`/plan_list`);
};

export { getTestQuestions as a, getPlanList as g };
//# sourceMappingURL=tests-Wzq-XyKT.mjs.map
