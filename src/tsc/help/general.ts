export default class General {
    public static get isServer(): boolean {
        return typeof window == "undefined";
    }
}