import { Child } from "./Child";

export default function Parent() {
    return <Child name={"hello, world"} onClick={()=> console.log('sup')}>
        sup
    </Child>;
}
