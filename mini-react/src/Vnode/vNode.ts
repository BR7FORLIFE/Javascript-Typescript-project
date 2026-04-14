export type Vnode = {
    type: string;
    props: {
        [key: string]: any;
        children: Vnode[];
    };
};

export type jsxType =
    | "JSXElement"
    | "JSXText"
    | "JSXExpressionContainer"
    | "JSXAttribute"
    | "Identifier";
