export default class ReactComponent {
    /**
     * This is the first phase of component building where the component is instantiated.
     *
     * @param component - The component definition created from the settings form.
     * @param options - Any options passed into the renderer.
     * @param data - The submission data where this component's data exists.
     */
    constructor(component: any, options: any, data: any);
    reactInstance: any;
    /**
     * This method is called any time the component needs to be rebuilt. It is most frequently used to listen to other
     * components using the this.on() function.
     */
    init(): any;
    /**
     * This method is called before the component is going to be destroyed, which is when the component instance is
     * destroyed. This is different from detach which is when the component instance still exists but the dom instance is
     * removed.
     */
    destroy(): any;
    /**
     * This method is called before a form is submitted.
     * It is used to perform any necessary actions or checks before the form data is sent.
     *
     */
    beforeSubmit(): any;
    /**
     * The second phase of component building where the component is rendered as an HTML string.
     *
     * @returns {string} - The return is the full string of the component
     */
    render(): string;
    /**
     * Callback ref to store a reference to the node.
     *
     * @param element - the node
     */
    setReactInstance(element: any): void;
    /**
     * The third phase of component building where the component has been attached to the DOM as 'element' and is ready
     * to have its javascript events attached.
     *
     * @param element
     * @returns {Promise<void>} - Return a promise that resolves when the attach is complete.
     */
    attach(element: any): Promise<void>;
    /**
     * The fourth phase of component building where the component is being removed from the page. This could be a redraw
     * or it is being removed from the form.
     */
    detach(): void;
    /**
     * Override this function to insert your custom component.
     *
     * @param element
     * @param ref - callback ref
     */
    attachReact(element: any, ref: any): void;
    /**
     * Override this function.
     */
    detachReact(element: any): void;
    /**
     * Something external has set a value and our component needs to be updated to reflect that. For example, loading a submission.
     *
     * @param value
     */
    setValue(value: any): void;
    shouldSetValue: boolean | undefined;
    dataForSetting: any;
    /**
     * The user has changed the value in the component and the value needs to be updated on the main submission object and other components notified of a change event.
     *
     * @param value
     */
    updateValue: (value: any, flags: any) => any;
    dataValue: any;
    /**
     * Get the current value of the component. Should return the value set in the react component.
     *
     * @returns {*}
     */
    getValue(): any;
    /**
     * Override normal validation check to insert custom validation in react component.
     *
     * @param data
     * @param dirty
     * @param rowData
     * @returns {boolean}
     */
    checkValidity(data: any, dirty: any, rowData: any): boolean;
    /**
     * Do custom validation.
     *
     * @param data
     * @param dirty
     * @param rowData
     * @returns {boolean}
     */
    validate(data: any, dirty: any, rowData: any): boolean;
}
//# sourceMappingURL=ReactComponent.d.ts.map