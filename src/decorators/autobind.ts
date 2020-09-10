// Bind Logic
export function Autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
) {
    const orignalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = orignalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}