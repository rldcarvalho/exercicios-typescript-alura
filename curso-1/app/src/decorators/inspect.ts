
export function inspect(
    target: any,
    propertyKeys: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`--- Método ${propertyKeys}`);
        console.log(`------ Parâmetros ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor;
}
