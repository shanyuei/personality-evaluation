export interface LoginResponse {
    email: string;
    id: number;
    token: string;
    [property: string]: any;
}

export interface UserInfo {
    email: string;
    id: number;
    /**
     * 语言设置
     */
    lang: string;
    /**
     * first and last name
     */
    name: string;
    token: string;
    /**
     * 订阅到期时间
     */
    vip_time: string;
    [property: string]: any;
}
export interface UserTestInfo {
    /**
     * 主人格类型
     */
    dominant_type: number;
    dominant_types: number[];
    max_score: number;
    /**
     * 分数百分比
     */
    percentages: Record<string, number>;
    /**
     * 测试各个人格分数
     */
    type_scores: Record<string, number>;
    [property: string]: any;
}

export interface UpdatePasswordRequest {
    /**
     * 旧密码
     */
    old_password: string;
    /**
     * 新密码
     */
    password: string;
    /**
     * 重复新密码
     */
    re_password: string;
    [property: string]: any;
}
