declare namespace actions {
    /**
     * <p>There are 3 kinds of actions:</p>
     * <ul>
     * <li>action: This is typically associated with a button or action menu item. The action must have an action
     *     function or an href URL.</li>
     * <li>toggle: This is typically associated with a checkbox input, button, or toggle menu item. The action must have
     *     get and set functions and not have a choices property. Toggle actions update an external Boolean state variable
     *     by means of the get and set functions. It is also possible to keep the state in the action by using 'this'
     *     in the get and set functions.</li>
     * <li>radio group: This is typically associated with radio inputs, select list, or a radioGroup menu item. The action
     *     must have get and set functions and a choices property. Radio group actions update an external state variable
     *     with the currently selected value of the group by means of the get and set functions. It is also possible to
     *     keep the state in the action by using 'this' in the get and set functions.</li>
     * </ul>
     *
     * <p>Note: The disabled and hide properties cannot be functions. Menu widget can use actions and non-action based menu
     * items allow hide and disabled to be functions. But when a menu uses an action that action still must not use
     * functions for disabled and hide.</p>
     *
     * <p>As an alternative to label (or onLabel, offLabel) you can specify labelKey (or onLabelKey, offLabelKey) and
     * the apex.lang.getMessage function will be used to lookup the label text. The localized label text is then stored in
     * the normal label/onLabel/offLabel property. This happens when the action is added. The same applies to titleKey
     * groupKey, and labelKey of each object in the choices array.</p>
     * @property name - A unique name for the action. By convention the style of names uses a dash to separate
     *   words as in "clear-log". Name must not contain spaces, ">", ":", quote, or double quote, or non-printing characters.
     * @property label - translatable label for action used in buttons, menus etc. Note: if this is a
     *   radio group action (action has choices property) the label is optional. It is used in results of the list
     *   and listShortcuts methods. Depending on what kind of UI control the action is bound to it may be used as a label
     *   for the whole group. For example using aria-label.
     * @property [onLabel] - Only for dynamic antonyms toggle actions. This is the label when the value is true.
     * @property [offLabel] - Only for dynamic antonyms toggle actions. This is the label when the value is false.
     * @property [contextLabel] - A more descriptive label used in place of label for use in listing actions and shortcuts.
     * @property [icon] - The icon for action may be used in buttons and menus
     * @property [iconType] - The icon type. Defaults to a-Icon. Updates to the iconType
     *   may not be supported by all control types that can be associated with actions.
     * @property [disabled] - Disabled state of action; true if the action is disabled and false if it is enabled. The default is enabled
     * @property [hide] - Hidden state of action; true if UI controls connected to this action should be hidden and false otherwise.
     *   The default is false (show).
     * @property [title] - The title to use as the title attribute when appropriate.
     * @property [shortcut] - The keyboard shortcut to invoke action (not allowed for radio group actions).
     * @property [href] - For actions that navigate set href to the URL to navigate to and don't set an action function.
     *   An action of type action must have an href or action property set.
     * @property [target] - For actions that navigate this is the window to open the href URL in. Only applies
     *   when href is specified. Typical value is "_blank" to open in a new tab or window. Omit to open in the
     *   current window.
     * @property [action] - <em>function(event, focusElement):boolean</em> The function that is called when the
     *   action is invoked with {@link actions#invoke}. The action must return true if it sets focus. An action of
     *   type action must have an href or action property set.
     * @property [get] - For toggle actions this function should return true or false. For radio group actions this
     *                      should return the current value.
     * @property [set] - For toggle actions this receives a boolean value. For radio group actions this function receives
     *                      the new value.
     * @property [choices] - This is only for radio group actions. Array of objects. Each object has properties:
     *                   label, value, icon, iconType, shortcut, disabled, group (for select lists only)
     * @property [labelClasses] - This is only for radio group actions. Classes to add to all radio labels. This and the next two label
     *   properties are only used when rendering radio group choices.
     * @property [labelStartClasses] - Only for radio group actions. Classes to add to last radio label
     * @property [labelEndClasses] - Only for radio group actions. Classes to add to last radio label
     * @property [itemWrapClasses] - Only for radio group actions. Classes to add to a span wrapper element. Or to change the
     *   span use one of these prefixes: p:, li:, div:, span:<br>
     *   For example "li:myRadio"
     */
    type action = {
        name: string;
        label: string;
        onLabel?: string;
        offLabel?: string;
        contextLabel?: string;
        icon?: string;
        iconType?: string;
        disabled?: boolean;
        hide?: boolean;
        title?: string;
        shortcut?: actions.shortcutName;
        href?: string;
        target?: string;
        action?: (...params: any[]) => any;
        get?: (...params: any[]) => any;
        set?: (...params: any[]) => any;
        choices?: any[];
        labelClasses?: string;
        labelStartClasses?: string;
        labelEndClasses?: string;
        itemWrapClasses?: string;
    };
    /**
     * <p>This is the string name of a keyboard shortcut. It represents the key(s) to be typed by the user and can
     * be a single key combination or a sequence of keys. The shortcut name must be given in the following format:<p>
     * <pre><code>
     *   [Ctrl+][Alt+][Meta+][Shift+]key
     * </code></pre>
     *
     * <p>Where strings in square brackets ([]) are optional and represent a modifier key. The string <code>key</code> is
     * the name of the key and may be one of: "0"-"9", "A"-"Z" or "Help", "Backspace", "Enter", "Escape",
     *   "Space", "Page Up", "Page Down", "End", "Home", "Left", "Up", "Right", "Down", "Insert", "Delete",
     *   "Keypad 0"-"Keypad 9", "Keypad *", "Keypad +", "Keypad -", "Keypad .", "Keypad /", "Keypad =",
     *   "Keypad Clear", "F1"-"F15",
     *   "Comma", "Period", "Semicolon", "Minus", "Quote", "Backtick", "=", "/", "[", "\", "]".
     * </p>
     * <p>Order and case is important. Key names and modifiers are not localized. The key names are based on
     * the standard US keyboard layout and may not correspond with what is actually printed on the key caps or
     * what character is printed (in the case of a printing key).
     * </p>
     * <p>The shortcut name can be a sequence of key combinations separated by commas. The user types the shortcut by
     * typing the first key combination followed by the second and so on. It is possible to have a sequence of length one,
     * which allows defining shortcuts as single letters without any modifier key. Letters can be in upper or lower case.
     * </p>
     * <p>The primary shortcut for an action is specified in the shortcut property of the {@link actions.action} object.
     * This is so that it can be shown in associated menu items.
     * Additional shortcuts can be added with {@link actions#addShortcut}.</p>
     *
     * <p>One limitation of shortcuts in the browser environment is that it is difficult to find keyboard combinations
     * that are not already used for something else and are consistent across all browsers, operating systems and with
     * all keyboard layouts. Key combinations used by the operating system or browser may not be passed on to the
     * actions keydown handler or even if they are the browser or operating system function has also already happened.
     * Many keyboard layouts use the Right side Alt key (known as AltGr) to enter additional characters. The AltGr key
     * can be simulated by pressing Ctrl+Alt. This makes some Ctrl+Alt combinations unavailable. On Mac OS the
     * Option/Alt key plus a letter or number is used to produce additional characters.
     * </p>
     * <p>See {@link apex.actions.shortcutSupport} for information about what kinds of shortcuts if any the user
     * can type. If shortcut support is "off" then no shortcuts are recognized. Shortcut sequences are only recognized
     * if shortcut support is "sequence". Shortcuts can always be defined.
     * <p>
     * <p>When focus is in a control that allows character input then shortcuts that would produce printable
     * characters or are used for editing are ignored by actions. This includes controls such as text fields and
     * text areas but also controls such as select lists that support type to select.</p>
     * @example
     * <caption>Example key combinations. Press the modifier keys in combination with the specified
     * key: W, F7, Page Down.</caption>
     *   Ctrl+W
     *   Ctrl+Shift+F7
     *   Alt+Page Down
     * @example
     * <caption>Example key sequence. Press the first key combination Ctrl+F2 and release then press the G key
     * and then the H key. For the second example press the C key then the S key. In the third example press
     * C then 6 (not Shift+6). In the last example simply press W.
     * Although the letters must be in upper case in the shortcut name they can be typed with our without the Shift
     * modifier. All but the first example will be ignored when focus is in a control that takes character input.
     * </caption>
     *   Ctrl+F2,G,H
     *   C,S
     *   C,6
     *   W
     */
    type shortcutName = string;
    /**
     * <p>Information about a shortcut.</p>
     * @property shortcut - The shortcut name.
     * @property shortcutDisplay - The shortcut display string.
     * @property actionName - The name of the action that the shortcut invokes.
     * @property actionLabel - The label of the action. For choice actions this includes the choice label.
     */
    type shortcutListItem = {
        shortcut: string;
        shortcutDisplay: string;
        actionName: string;
        actionLabel: string;
    };
}

/**
 * <p>The actions interface manages a collection of {@link actions.action} objects. An action encapsulates
 * the identity, state and behavior of a named operation or procedure that the user initiates via a user
 * interface element. Actions are most useful when an operation can be initiated in multiple ways such as with a button
 * or toolbar button, menu, or keyboard shortcut. The operation should be labeled consistently and if it can be
 * enabled and disabled that state must be kept consistent. By using an action and then associating a button and/or
 * menu item with that action all aspects of the action are centralized and kept in sync. This avoids duplicating
 * labels, icons etc.</p>
 *
 * <div class="hw">
 *     <h3 class="name" id="contexts-section">Actions Contexts</h3>
 *     <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark Actions Contexts" href="#contexts-section"></a>
 * </div>
 * <p>The apex.actions singleton (which is also the {@link apex.actions} namespace) manages
 * all the global (page level) actions. For components that can have multiple
 * instances on a page the global actions will not work because it is not clear which instance of the component the
 * action applies to. To support components the {@link apex.actions.createContext} function is used to create an actions
 * interface that is scoped to a specific component instance (the context). Typically the component (e.g. widget) would
 * call {@link apex.actions.createContext} when it is created and {@link apex.actions.removeContext}
 * when it is destroyed.</p>
 *
 * <p>For global actions and any other created actions contexts the methods on the actions object are used to add,
 * remove, lookup, and invoke actions. There are also methods to manage keyboard shortcuts. Additional state can be
 * stored in the action if desired. If any of the action properties change then {@link actions#update} must be called.</p>
 *
 * <p>Actions are associated with other controls that invoke the action. It is also possible to invoke
 * the action explicitly with the {@link actions#invoke} method. To toggle actions the {@link actions#toggle}
 * method is used and for radio group actions the {@link actions#set} method is used to change the value.
 * The following sections describes how to associate actions with various controls.</p>
 *
 * <div class="hw">
 *     <h3 class="name" id="buttons-section">Buttons</h3>
 *     <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark Buttons" href="#buttons-section"></a>
 * </div>
 * <p>To associate a button element with an action give it a class of js-actionButton and a data-action
 * attribute with the name of the action as its value. The button icon, label text, title, aria-label, hide/show,
 * and disabled state are all updated automatically.</p>
 * <p>For this automatic updating to work buttons should use the following classes:</p>
 * <ul>
 * <li>t-Button-label if a button has a text label this class should be on an element that wraps the text.
 *       This is useful when the button also has an icon or other non-text label content. This class does not
 *       go on the button element. If this class is not used then the content of the button element will be the
 *       label text.</li>
 * <li>t-Button--icon if a button has an icon this class should be on the button element. If the action has an
 *       icon and the button has this class then any elements with the icon type class will be updated with
 *       the icon. Any classes on the icon element that are not the icon, the icon type or start with "t-"
 *       will get removed.</li>
 * <li>t-Button--noLabel if a button has no visible label this class should be on the button element. A button with
 *       no visible label text will have the button's aria-label attribute set to the button label. Also if there
 *       is no title the label will be used as the title.</li>
 * </ul>
 * <p>If the action label or title are null they will be initialized with the text and title attribute value respectively
 * from the first button (in document order) associated with the action. This is useful if the server has
 * already rendered a localized button for the action. The title comes from the button title attribute. The label comes
 * from the first found of; aria-label attribute, title attribute if button has class t-Button--noLabel,
 * content of the descendant element with class t-Button-label, and finally the button element content. If disabled
 * is null it will be taken from the button disabled property. If you don't want the label, title, or icon to be updated
 * add attribute data-no-update="true".</p>
 *
 * <p>Example:</p>
 * <pre><code>    &lt;button class="js-actionButton" data-action="undo">Undo&lt;/button>
 * </code></pre>
 *
 * <div class="hw">
 *     <h3 class="name" id="checkboxes-section">Checkboxes</h3>
 *     <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark Checkboxes" href="#checkboxes-section"></a>
 * </div>
 * <p>A checkbox can be associated with a toggle action by giving the input element (or a wrapping parent element)
 * a class of js-actionCheckbox and a data-action attribute with the name of the action as its value. The checkbox
 * should have a label element. The icon, label text, title, hide/show, disabled state, and checked state are all
 * updated automatically. For hide to work correctly use a wrapping element.</p>
 *
 * <p>If the label has the class t-Button then it should be marked up like a button and the same classes described for
 * a button are used to update the label and icon (except a visually hidden child element is used for the label
 * in place of aria-label). Otherwise the label element content will be updated with the label and the icon is not used.
 * If the action label or title are null they will be initialized from the markup. If the checkbox label is marked up
 * like a button then the label comes from the text of a child element with class t-Button-label or if the label
 * has class t-Button--noLabel then from a child element with class u-VisuallyHidden. If you don't want the label,
 * title, or icon to be updated add attribute data-no-update="true".</p>
 *
 * <p>Example:</p>
 * <pre><code>    &lt;input id="abc" type="checkbox" class="js-actionButton" data-action="optionA">&lt;label for="abc">Option A&lt;/label>
 *    or
 *     &lt;div class="js-actionButton" data-action="optionA">
 *         &lt;input id="abc" type="checkbox">&lt;label for="abc">Option A&lt;/label>
 *     &lt;/div>
 * </code></pre>
 *
 * <div class="hw">
 *     <h3 class="name" id="radiogroups-section">Radio Groups</h3>
 *     <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark Radio Groups" href="#radiogroups-section"></a>
 * </div>
 * <p>A radio group is a set of input elements of type radio and sharing the same name value. A radio group can be
 * associated with a radio group action by giving the element that wraps the radio group a class of
 * js-actionRadioGroup and a data-action attribute with the name of the action as its value. The wrapper element
 * aria label is kept in sync with the action label. The radio group as a whole does not have a disabled state,
 * icon or title. When the radio action value changes (or when update is called) the checked state (and disabled state)
 * of each radio input is updated.</p>
 * <p>The element with class js-actionRadioGroup can also have attributes: data-item-start, data-item, data-item-end,
 * data-item-wrap to override action properties labelStartClasses, labelClasses, labelEndClasses, and itemWrapClasses
 * respectively.</p>
 * <p>If the action label is null it will be initialized from the wrapper element aria-label. If the wrapping element
 * has no children when the action is added or when updateChoices is called (after the choices have been changed) then
 * the choices are rendered as radio input, label pair elements. The action labelStartClasses, labelClasses,
 * labelEndClasses values are used for the classes of the label elements. If there is an icon it will be used
 * as the label. The label will be included as a hidden but accessible label. The label element will have a title
 * if there is a title property or if the choice has an icon. The title comes from the label property if the title
 * property isn't given.</p>
 *
 * <p>Example:</p>
 * <pre><code>    &lt;div class="js-actionRadioGroup" data-action="itemSize">
 *       &lt;input id="lc1" type="radio" name="RG1" value="s">&lt;label for="lc1">Small&lt;/label>
 *       &lt;input id="lc2" type="radio" name="RG1" value="m">&lt;label for="lc2">Medium&lt;/label>
 *       &lt;input id="lc3" type="radio" name="RG1" value="l">&lt;label for="lc3">Large&lt;/label>
 *     &lt;/div>
 * </code></pre>
 *
 * <div class="hw">
 *     <h3 class="name" id="selectlists-section">Select List</h3>
 *     <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark Select List" href="#selectlists-section"></a>
 * </div>
 * <p>To associate a select element with a radio group action give it a class of js-actionSelect and a data-action
 * attribute with the name of the action as its value. Select lists used with actions are assumed to not have an
 * associated label element. The select element aria label, title, value, and disabled state are kept in sync with the
 * action. When the radio action value changes (or when update is called) the select element value is updated and
 * also the disabled state of each option element.</p>
 * <p>If the action label or title are null they will be initialized from the select element aria-label and
 * title attributes. If the select element has no children when the action is added or when updateChoices is called
 * (after the choices have been changed) then the choices are rendered as option elements. The choice group property
 * is used to put options in optgroup elements. The group property value is used as the optgroup label. The choices
 * need to be sorted first by group value.</p>
 *
 * <p>Example:</p>
 * <pre><code>    &lt;select class="js-actionSelect" data-action="itemSize">...&lt;/select>
 * </code></pre>
 *
 * <div class="hw">
 *     <h3 class="name" id="menuitems-section">Menu Items</h3>
 *     <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark Menu Items" href="#menuitems-section"></a>
 * </div>
 * <p>For {@link menu} widget menu items of type action, toggle, or radioGroup simply specify the
 * action name as the value of the action property. Values for
 * label, icon, iconType, disabled, hide, and accelerator are taken from the action (accelerator is taken from
 * the action shortcut property). It is possible to override action values such as label and icon by specifying them
 * in the menu item.</p>
 *    Examples:
 * <pre><code>    { type: "action", action: "undo" },
 *     { type: "toggle", action: "myToggleAction" },
 *     { type: "radioGroup", action: "myRadioAction" }
 * </code></pre>
 *
 * <div class="hw">
 *     <h3 class="name" id="shortcuts-section">Shortcuts</h3>
 *     <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark Shortcuts" href="#shortcuts-section"></a>
 * </div>
 * <p>Shortcuts are not an actual widget or a DOM Element. The keyboard event handler for invoking actions in
 * response to shortcut keys is in this module and is registered on the context element
 * (body for the global context).</p>
 *
 * <div class="hw">
 *     <h3 class="name" id="customcontrols-section">Associating actions with custom UI controls</h3>
 *     <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark Associating actions with custom UI controls" href="#customcontrols-section"></a>
 * </div>
 * <p>To integrate actions with other UI controls:</p>
 * <ul>
 * <li>Devise a way to specify the action name. For example using a class such as
 * js-actionRadioGroup and an attribute such as data-action attribute on an appropriate element.
 * For widgets the action name could be passed as an option to the initialization function.</li>
 * <li>Register an observer call back using {@link actions#observe} to get notified when the action is added,
 * removed, or updated. Use this callback to update the state of the UI control such as enabling or
 * disabling it or changing the label or icon.</li>
 * <li>Call the invoke method when it is time to invoke the action.</li>
 * </ul>
 */
declare interface actions {
    /**
     * <p>This is type name of the actions context as given in the {@link apex.actions.createContext} call.
     * The typeName of the global context apex.actions is "global".</p>
     */
    typeName: string;
    /**
     * <p>This is the Element context that actions are scoped within as given in
     * the {@link apex.actions.createContext} call.</p>
     */
    context: Element;
    /**
     * <p>Add an {@link actions.action} object or an array of {@link actions.action} objects to this actions context.
     * The action name must be unique within the context and the shortcut if any must be unique
     * within the context and valid. Debug warnings are logged if any of these conditions are not met.
     * See also {@link actions#remove}.</p>
     * @example
     * <caption>This example adds one action to the global actions context.</caption>
     * apex.actions.add({
     *     name: "send-email",
     *     label: "Send Email",
     *     action: function(event, focusElement) {...}
     * });
     * @example
     * <caption>This example adds an array of actions to the context
     * <code class="prettyprint">log1</code> returned by {@link apex.actions.createContext}.</caption>
     * log1.add([{
     *         name: "clear-log",
     *         label: "Clear",
     *         action: function(event, focusElement) {...}
     *     },
     *     {
     *         name: "verbose",
     *         label: "Verbose",
     *         get: function() {...},
     *         set: function(value) {...}
     *     },
     *     ...
     * ]);
     * @param pActions - The action or an array of actions to add.
     * @returns true if all the actions and shortcuts are added without errors or warnings,
     *   false otherwise.
     */
    add(pActions: actions.action | actions.action[]): boolean;
    /**
     * <p>Add one or more {@link actions.action} objects from simple list markup. This is useful in cases where it is easier
     * to render list markup than an array of action objects. This does not support adding actions
     * with functions but action functions can be added either before or after.</p>
     * <p>The markup expected by this method overlaps with what the {@link menu} widget expects.</p>
     *
     * <p>Expected markup:</br>
     * An element with a <code class="prettyprint">&lt;ul&gt;</code> child. The
     * <code class="prettyprint">&lt;ul&gt;</code> has one or more <code class="prettyprint">&lt;li&gt;</code>
     * elements each one representing an action.
     * The <code class="prettyprint">&lt;li&gt;</code> element can contain either an
     * <code class="prettyprint">&lt;a&gt;</code> or <code class="prettyprint">&lt;span&gt;</code> element.</p>
     * <table>
     *   <caption>Action property markup source, for actions based on list markup</caption>
     *   <thead>
     *     <tr>
     *       <th scope="col">Action property</th>
     *       <th scope="col">Comes from</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <th scope="row">name</th>
     *       <td>li[data-id]</td>
     *     </tr>
     *     <tr>
     *       <th scope="row">label</th>
     *       <td>a or span content</td>
     *     </tr>
     *     <tr>
     *       <th scope="row">title</th>
     *       <td>a[title] or span[title]</td>
     *     </tr>
     *     <tr>
     *       <th scope="row">href</th>
     *       <td>a[href]</td>
     *     </tr>
     *     <tr>
     *       <th scope="row">target</th>
     *       <td>a[target]</td>
     *     </tr>
     *     <tr>
     *       <th scope="row">disabled</th>
     *       <td>true if li[data-disabled=true] false otherwise</td>
     *     </tr>
     *     <tr>
     *       <th scope="row">hide</th>
     *       <td>true if li[data-hide=true] false otherwise</td>
     *     </tr>
     *     <tr>
     *       <th scope="row">shortcut</th>
     *       <td>li[data-shortcut]</td>
     *     </tr>
     *     <tr>
     *       <th scope="row">icon</th>
     *       <td>li[data-icon] If the value has a space the icon is the word after the space
     *         otherwise it is the whole value</td>
     *     </tr>
     *     <tr>
     *       <th scope="row">iconType</th>
     *       <td>li[data-icon] If the value has a space the type is the word before the space</td>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * <p>If there is no name or label or the value of <code class="prettyprint">&lt;href&gt;</code> equals
     * "separator" then no action is created for that <code class="prettyprint">&lt;li&gt;</code>.
     * If the <code class="prettyprint">&lt;li&gt;</code> has a <code class="prettyprint">&lt;ul&gt;</code>
     * child the <code class="prettyprint">&lt;ul&gt;</code> is processed recursively.</p>
     * @example
     * <caption>This example shows markup for two actions.</caption>
     * <div id="myActionList">
     *     <ul>
     *         <li data-id="goto-page-1">
     *             <a href="...">Page One</a>
     *         </li>
     *         <li data-id="goto-page-2">
     *             <a href="...">Page Two</a>
     *         </li>
     *     </ul>
     * </div>
     * @example
     * <caption>This example shows how to turn the above markup into actions in the global context.</caption>
     * apex.actions.addFromMarkup($("#myActionList"));
     * @param pList$ - The jQuery object representing the parent of the actions list markup.
     */
    addFromMarkup(pList$: jQuery): void;
    /**
     * <p>Remove one or more {@link actions.action} objects from this actions context.
     * See also {@link actions#add}.</p>
     * @example
     * <caption>This example removes one action from the global action context.</caption>
     * apex.actions.remove( "send-email" );
     * @example
     * <caption>This example removes an array of actions from the context
     * <code class="prettyprint">log1</code> returned by {@link apex.actions.createContext}.</caption>
     * log1.remove( ["clear-log", "verbose"] );
     * @param pActions - The action or action name or an array of actions
     *     or an array of action names to remove.
     */
    remove(pActions: actions.action | string | actions.action[] | string[]): void;
    /**
     * <p>Remove all actions from this actions context.</p>
     * @example
     * <caption>This example removes all the actions from the global context.</caption>
     * apex.actions.clear();
     */
    clear(): void;
    /**
     * <p>Lookup and return an action by name. If you modify the properties of the action
     * you may need to call {@link actions#update} to update any associated UI elements or shortcuts.
     * If you modify the choices of the action then call {@Link actions#updateChoices}.</p>
     * @example
     * <caption>This example updates the label and title of an action.</caption>
     * var action = apex.action.lookup( "my-action" );
     * action.title = "New Title";
     * action.label = "New Label";
     * apex.action.update( "my-action" );
     * @param pActionName - The name of the action to return.
     * @returns action or undefined if action doesn't exist.
     */
    lookup(pActionName: string): actions.action;
    /**
     * <p>Return an array of actionName, label pairs for all actions in the context. For actions with
     * choices there is an array item for each choice.</p>
     * @example
     * <caption>This example writes to the console a list of all the actions in the global context.</caption>
     * apex.actions.list().forEach(function(a) {
     *     console.log( "Action Label: " + a.label +
     *         ", Name: " + a.name +
     *         (a.choice !== undefined ? ", Choice: " + a.choice : "" ) );
     * });
     * @returns An array of objects with name, label and optional choice properties.
     */
    list(): any[];
    /**
     * <p>Update any UI elements associated with the action after it changes. Calling update will
     * notify any observers that the action has changed. Debug warnings will be logged and
     * the return value is false if the action has a problem with the shortcut.</p>
     * @example
     * <caption>See example for {@link actions#lookup}</caption>
     * @param pActionName - The name of the action to update.
     * @returns false if the shortcut is invalid or a duplicate and true otherwise.
     */
    update(pActionName: string): boolean;
    /**
     * <p>Call this only if the set of choices for an action has changed. This will
     * notify any observers that the set of action choices has changed.</p>
     * @example
     * <caption>This example adds a new choice to the action "choose-fruit".</caption>
     * var action = apex.action.lookup( "choose-fruit" );
     * action.choices.push( {
     *     label: "Apple",
     *     value: "APPLE"
     * } );
     * apex.action.updateChoices( "choose-fruit" );
     * @param pActionName - The name of the action that has had its choices updated.
     * @returns false if the action has no choices and true otherwise
     */
    updateChoices(pActionName: string): boolean;
    /**
     * <p>Enable UI elements associated with the action by setting <code class="prettyprint">disabled</code> property to false.
     * This is a convenience method to enable without having to call {@link actions#lookup} and
     * {@link actions#update}.</p>
     * @example
     * <caption>This example enables the "send-email" action.</caption>
     * apex.actions.enable( "send-email" );
     * @param pActionName - The name of the action to enable.
     */
    enable(pActionName: string): void;
    /**
     * <p>Disable UI elements associated with the action by setting <code class="prettyprint">disabled</code> property to true.
     * This is a convenience method to disable without having to call {@link actions#lookup} and
     * {@link actions#update}.</p>
     * @example
     * <caption>This example disables the "send-email" action.</caption>
     * apex.actions.disable( "send-email" );
     * @param pActionName - The name of the action to disable.
     */
    disable(pActionName: string): void;
    /**
     * <p>Hide UI elements associated with the action by setting the <code class="prettyprint">hide</code> property to true.
     * This is a convenience method to hide without having to call {@link actions#lookup} and
     * {@link actions#update}.</p>
     * @example
     * <caption>This example hides the "send-email" action.</caption>
     * apex.actions.hide( "send-email" );
     * @param pActionName - The name of the action to hide.
     */
    hide(pActionName: string): void;
    /**
     * <p>Show UI elements associated with the action by setting the <code class="prettyprint">hide</code> property to false.
     * This is a convenience method to show without having to call {@link actions#lookup} and
     * {@link actions#update}.</p>
     * @example
     * <caption>This example shows the "send-email" action.</caption>
     * apex.actions.show( "send-email" );
     * @param pActionName - The name of the action to show.
     */
    show(pActionName: string): void;
    /**
     * <p>Invoke the named action. Even though pEvent and pFocusElement are optional it is recommended to
     * always include them.</p>
     * @example
     * <caption>This example invokes the "send-email" action when something is clicked.</caption>
     * $( "#something" ).click( function( event ) {
     *     apex.actions.invoke( "send-email", event, event.target );
     * } );
     * @param pActionName - Name of the action to invoke.
     * @param [pEvent] - Browser event that caused the action to be invoked.
     * @param [pFocusElement] - The element that will receive focus when the action is complete unless
     * the action returns true. This is likely also the element that had focus when the action was invoked.
     * @returns false if there is no such action or action has no action method, true if action set the focus,
     *   all other cases should return undefined.
     */
    invoke(pActionName: string, pEvent?: Event, pFocusElement?: Element): boolean | undefined;
    /**
     * <p>Toggle the named action. This should only be used for toggle actions.
     * Toggle actions have get and set methods and don't have a choices property.</p>
     * @example
     * <caption>This example toggles the "verbose" action of the context
     * <code class="prettyprint">log1</code> returned by {@link apex.actions.createContext}.</caption>
     * log1.toggle( "verbose" );
     * @param pActionName - Name of the action to toggle.
     * @returns false if there is no such action or action doesn't have get/set methods
     * all other cases should return undefined
     */
    toggle(pActionName: string): boolean | undefined;
    /**
     * <p>Return the current value of a radio group or toggle action.</p>
     * @example
     * <caption>This example returns the current choice of radio group action "change-view"
     * of the interactive grid region with static id "emp". The Interactive Grid method getActions
     * returns the actions context for the region.</caption>
     * apex.region( "emp" ).call( "getActions" ).get( "change-view" );
     * @param pActionName - The name of the action.
     * @returns The current value or null if the action doesn't exist.
     */
    get(pActionName: string): string;
    /**
     * <p>Set the value of a radio group action or toggle action.</p>
     * @example
     * <caption>This example sets the current choice of radio group action "change-view"
     * of the interactive grid region with static id "emp" to "detail". The Interactive Grid method getActions
     * returns the actions context for the region.</caption>
     * apex.region( "emp" ).call( "getActions" ).set( "change-view", "detail" );
     * @param pActionName - The name of the action.
     * @param pValue - The value to set.
     */
    set(pActionName: string, pValue: string | boolean): void;
    /**
     * <p>Add a keyboard shortcut synonym for an action. Debug warnings are logged if there are problems.
     * See also {@link actions#removeShortcut}.</p>
     * <p>This allows an action to have more than one shortcut key to invoke it.
     * The <code class="prettyprint">shortcut</code> property of the action is not affected.</p>
     * @example
     * <caption>This example adds a shortcut synonym for action "send-email".</caption>
     * apex.actions.addShortcut("Ctrl+Shift+E", "send-email");
     * @param pShortcutName - The keyboard shortcut synonym to add.
     * @param pActionName - The name of the action to add a shortcut for.
     * @param [pChoiceValue] - Choice value only if the action is a radio group. The shortcut
     *   will select the given choice.
     * @returns true if successful and false if there is no such action or there is a duplicate shortcut.
     */
    addShortcut(pShortcutName: actions.shortcutName, pActionName: string, pChoiceValue?: string): boolean;
    /**
     * <p>Remove a keyboard shortcut synonym for an action.
     * See also {@link actions#addShortcut}</p>
     * @example
     * <caption>This example removes a shortcut synonym.</caption>
     * apex.actions.addShortcut( "Ctrl+Shift+E" );
     * @param pShortcutName - The keyboard shortcut synonym to remove.
     * @returns true if successful false if the shortcut is the primary shortcut for an action.
     */
    removeShortcut(pShortcutName: actions.shortcutName): boolean;
    /**
     * <p>Return a list of all shortcuts in the context.</p>
     * @example
     * <caption>This example writes to the console all the shortcuts in the global context.</caption>
     * var i,
     *     shortcuts = apex.actions.listShortcuts();
     * for ( i = 0; i < shortcuts.length; i++ ) { // for each shortcut
     *      console.log("Press shortcut " + shortcuts[i].shortcutDisplay + " to " + shortcuts[i].actionLabel );
     * }
     * @param pWithMarkup - Optional default is false. If true wrap the display name in HTML markup.
     * @returns An array of objects with information about the shortcut.
     */
    listShortcuts(pWithMarkup: boolean): actions.shortcutListItem[];
    /**
     * <p>Return the friendly display string for a keyboard shortcut name.</p>
     * @param pShortcutName - Keyboard shortcut to get the display string for.
     * @param pWithMarkup - Optional default is false. If true wrap the display name in HTML markup.
     * @returns A friendly version of the shortcut.
     *   The display string is sensitive to the operating system. See {@link apex.actions.setKeyCaps}.
     */
    shortcutDisplay(pShortcutName: actions.shortcutName, pWithMarkup: boolean): string;
    /**
     * <p>This is used to disable all shortcuts temporarily. Call at the start of a user interaction
     * that should have shortcuts disabled for example a custom popup. Call {@link actions#enableShortcuts} when
     * finished. It is called automatically when APEX modal dialogs or menus open.
     * Calls can be nested. For each call to disableShortcuts there should be a corresponding
     * call to {@link actions#enableShortcuts}.</p>
     */
    disableShortcuts(): void;
    /**
     * <p>This is used to enable all shortcuts after they were disabled with {@link actions#disableShortcuts}.
     * It is called automatically when APEX modal dialogs or menus close.
     * Calls can be nested. For each call to {@link actions#disableShortcuts} there should be a corresponding
     * call to enableShortcuts.</p>
     */
    enableShortcuts(): void;
    /**
     * <p>Register a callback function to be notified when an action changes.
     * This is used to update UI elements associated
     * with an action when that action state changes. The most common elements including
     * buttons, checkbox and radio group inputs, select lists, and menus are already handled.</p>
     * @param pCallback - function notifyObservers( action, operation )
     *   operation is one of "add", "remove", "update", or "updateChoices"
     */
    observe(pCallback: (...params: any[]) => any): void;
    /**
     * <p>Remove callback.</p>
     * @param pCallback - The function that was added with {@link actions#observe}.
     */
    unobserve(pCallback: (...params: any[]) => any): void;
}

/**
 * <p>The apex namespace is the top level Oracle Application Express namespace and contains a number of sub namespaces,
 * and a few common functions and properties.</p>
 *
 * <p>The apex namespace also contains information on Application Express specific events.</p>
 */
declare namespace apex {
    /**
     * <p>The apex.actions namespace contains global functions related to the Oracle Application Express actions facility.
     * The methods and properties of the global actions context are also available in the apex.actions namespace but
     * are documented with the {@link actions} interface.
     * </p>
     */
    namespace actions {
        /**
         * <p>Create a new {@link actions} interface object that is scoped to the given DOM element context.
         * Any action buttons or other UI elements must be within the given pContext. Focus must be within pContext for
         * keyboard shortcuts defined in this context to be recognized. A global context at document.body is created
         * automatically and is accessed from apex.actions. The global context type name is "global".</p>
         * @example
         * <caption>This example creates a context within the element with id
         * <code class="prettyprint">myLogger</code> with type name "logger". Actions can then be added to the
         * actions interface <code class="prettyprint">log1</code>.</caption>
         * var log1 = apex.actions.createContext( "logger", $("#myLogger")[0] );
         * @param pTypeName - Type name of the actions context.
         * @param pContext - DOM element context that actions are scoped within.
         * @returns The actions interface object that was created.
         */
        function createContext(pTypeName: string, pContext: Element): actions;
        /**
         * <p>Remove an actions context that was created with {@link apex.actions.createContext}.</p>
         * @example
         * <caption>This example removes the context for the element with id
         * <code class="prettyprint">myLogger</code> with type name "logger".</caption>
         * apex.actions.removeContext( "logger", $("#myLogger")[0] );
         * @param pTypeName - Type name of the actions context to remove.
         * @param pContext - DOM element context that actions are scoped within.
         */
        function removeContext(pTypeName: string, pContext: Element): void;
        /**
         * <p>Return an array of all the actions context type names.</p>
         * @example
         * <caption>This example will log to the console the number of actions in each of the action contexts
         * of all types on the page.</caption>
         * var i, j, types, type, contexts;
         * types = apex.actions.getContextTypes();
         * for ( i = 0; i < types.length; i++ ) { // for each context type
         *     type = types[i];
         *     contexts = apex.actions.getContextsForType( type );
         *     for ( j = 0; j < contexts.length; j++ ) { // for each context instance
         *         console.log("Action context type: " + type + " [" + j + "]. Actions: " + contexts[j].list().length );
         *     }
         * }
         * @returns An array of context type names.
         */
        function getContextTypes(): string[];
        /**
         * <p>Return an array of all the actions context instances for a given type.</p>
         * @example
         * <caption>This example returns the contexts for type name "logger".</caption>
         * var loggers = apex.actions.getContextsForType( "logger" );
         * @param pTypeName - The type name of the actions contexts to return.
         * @returns An array of action instances.
         */
        function getContextsForType(pTypeName: string): actions[];
        /**
         * <p>Return the actions interface for a given context. The pTypeName is optional but if given must
         * match the type name used when the context was created. This is not often needed because the actions object
         * returned from createContext should be saved by any widget/component that created the context.</p>
         * @example
         * <caption>This example returns the context for the element with id
         * <code class="prettyprint">myLogger</code> and with type name "logger".</caption>
         * var log1 = apex.actions.findContext( "logger", $("#myLogger")[0] );
         * @example
         * <caption>This example is the same as the previous one except it does not provide the type name.</caption>
         * var log1 = apex.actions.findContext( $("#myLogger")[0] );
         * @param [pTypeName] - The type name of the actions context.
         * @param pContext - DOM element context that actions are scoped within.
         * @returns The actions interface or undefined if there is no actions defined for pContext.
         */
        function findContext(pTypeName?: string, pContext: Element): actions;
        /**
         * <p>Get or set the type of shortcut key support. The default is "sequence".
         * </p>
         * <p>Note: The shortcut key support setting does not affect what shortcuts can be defined for actions
         * but only how what the user types is recognized.</p>
         * @example
         * <caption>Get the current setting.</caption>
         * apex.actions.shortcutSupport();
         * @example
         * <caption>Turn off the ability to use shortcuts on the page for all action contexts.</caption>
         * apex.actions.shortcutSupport( "off" );
         * @example
         * <caption>Disable shortcut sequences such as C,B.</caption>
         * apex.actions.shortcutSupport( "single" );
         * @param [pShortcutType] - One of "off", "single", "sequence". If not specified the current value is returned.
         * @returns When no arguments are given returns the current setting otherwise returns nothing.
         */
        function shortcutSupport(pShortcutType?: string): string | undefined;
        /**
         * <p>Different types of keyboards for different types of operating systems or different languages can have
         * different symbols printed on the keys. The shortcuts must be defined according to {@link actions.shortcutName}.
         * This static method lets you set keyboard layout specific names or symbols to display for key names.
         * </p>
         * <p>Note: This affects how shortcuts are displayed not how they are defined.</p>
         * @example
         * <caption>Set some key caps for a Spanish keyboard.</caption>
         * apex.actions.setKeyCaps( {
         *    "/": "Minus",
         *    "Quote": "{",
         *    "Minus": "?"
         * } );
         * @param pKeyCaps - An object that maps the shortcutName key name such as "Ctrl" or "A" to the desired
         * word or character.  Pass in null to clear all the key cap mappings.
         */
        function setKeyCaps(pKeyCaps: any | null): void;
        /**
         * <p>Returns the current key caps. See {@link apex.actions.setKeyCaps}.
         * </p>
         */
        function getKeyCaps(): any;
    }
    /**
     * <p>This namespace property holds the jQuery function that APEX uses. Ideally there is just one copy
     * of jQuery on a page but it is possible to have multiple copies and even different versions of jQuery on a page.
     * This is sometimes necessary when using third party plugins that only work with an older version of jQuery.
     * Use this property in place of global variables $ or jQuery to ensure you are using the same jQuery library that
     * Application Express is using.</p>
     * @example
     * <caption>The following function creates a local variable $ as a convenient way to reference jQuery
     * while ensuring that it is using the same jQuery that APEX uses.</caption>
     * function myFunction() {
     *     var $ = apex.jQuery;
     *     // use $ to access jQuery functionality
     * }
     */
    var jQuery: (...params: any[]) => any;
    /**
     * <p>This namespace property stores the current page context. The current page context is different depending on
     * whether the page is a Desktop, or jQuery Mobile page. For Desktop, this is set to the HTML document
     * (same as apex.jQuery(document)).
     * For jQuery Mobile, where pages are actually represented as DIV elements in the Browser DOM and multiple page
     * DIVs can be loaded in the Browser DOM at one time, this is set to the DIV element representing the current page.
     * This is used to set the context for your jQuery selectors, to ensure that the selector is executing within the
     * context of the correct page.</p>
     * @example
     * <caption> This selects all elements with a CSS class of my_class, in the context of the current page.</caption>
     * apex.jQuery( ".my_class", apex.gPageContext$ );
     */
    var gPageContext$: jQuery;
    /**
     * <p>Determine if the user is or has been interacting with this web app using touch since the browser session
     * began. Note: it is possible for the user to touch for the first time after this function is called.</p>
     *
     * <p>It is rare to need know this information since the app should be designed to work for both touch and non-touch environments.</p>
     * @returns true if the user has been using touch to interact with the web app and false otherwise.
     */
    function userHasTouched(): boolean;
    /**
     * This namespace stores all debug functions of Oracle Application Express.
     */
    namespace debug {
        /**
         * Log level constants
         * @property OFF - Logging is off. Value is 0.
         * @property ERROR - Error logging level. Value is 1.
         * @property WARN - Warning logging level. Value is 2.
         * @property INFO - Information logging level. Value is 4.
         * @property APP_TRACE - Application tracing logging level. Value is 6.
         * @property ENGINE_TRACE - Engine tracing logging level. Value is 9.
         */
        var LOG_LEVEL: {
            OFF: number;
            ERROR: number;
            WARN: number;
            INFO: number;
            APP_TRACE: number;
            ENGINE_TRACE: number;
        };
        /**
         * <p>Method that returns the debug log level.
         * The debug log level is synchronized with hidden input element <code class="prettyprint">#pdebug</code>.
         * In a developer session, the default log level is WARN.</p>
         * @example
         * <caption>This example retrieves the logging level, prepends "Level=" and logs to the console.</caption>
         * apex.debug.log( "Level=", apex.debug.getLevel() );
         * @returns Logging level as an integer 1 to 9, or 0 to indicate debug logging is turned off.
         */
        function getLevel(): number;
        /**
         * <p>Method that sets the debug log level. Log messages at or below the specified level are written to the
         * console log. It is rarely necessary to call this function because the debug log level is
         * synchronized with the hidden input element <code class="prettyprint">#pdebug</code> that comes from the server.</p>
         * @example
         * <caption>This example sets the logging level to application tracing.</caption>
         * apex.debug.setLevel( apex.debug.LOG_LEVEL.APP_TRACE) );
         * @param pLevel - A number from 1 to 9, where level 1 is most important, and level 9 is least important.
         *   Can be one of the LOG_LEVEL constants. Any other value such as 0 will turn off debug logging.
         */
        function setLevel(pLevel: number): void;
        /**
         * <p>Log a message at the given debug log level. The log level set from the server or with {@link apex.debug.setLevel}
         * controls if the message is actually written. If the set log level is >= pLevel then the message is written.
         * Messages are written using the browsers built-in console logging, if available.
         * Older browsers may not support the console object or all of its features.</p>
         * @example
         * <caption>This example writes the message "Testing" to the console if the logging level is
         *   greater than or equal to 7.</caption>
         * apex.debug.message( 7, "Testing" );
         * @param pLevel - A number from 1 to 9, where level 1 is most important, and level 9 is
         *   least important. Can be one of the {@link apex.debug.LOG_LEVEL} constants.
         *   Any other value such as 0 will turn off debug logging.
         * @param arguments - Any number of parameters which will be logged to the console.
         */
        function message(pLevel: number, ...arguments: any[]): void;
        /**
         * <p>Log an error message. The error function always writes the error, regardless of the log level from the server
         * or set with {@link apex.debug.setLevel}.
         * Messages are written using the browsers built-in console logging, if available. If supported, console.trace is called.
         * Older browsers may not support the console object or all of its features.</p>
         * @example
         * <caption>This example writes the message "Update Failed" to the console.</caption>
         * apex.debug.error( "Update Failed" );
         * @example
         * <caption>This example writes an exception message (from variable
         * <code class="prettyprint">ex</code>) to the console.</caption>
         * apex.debug.error( "Exception: ", ex );
         * @param arguments - Any number of parameters which will be logged to the console.
         */
        function error(...arguments: any[]): void;
        /**
         * <p>Log a warning message. Similar to {@link apex.debug.message} with the level set to WARN.</p>
         * @example
         * <caption>This example writes a warning message to the console if the debug log level is WARN or greater.</caption>
         * apex.debug.warn( "Empty string ignored" );
         * @param arguments - Any number of parameters which will be logged to the console.
         */
        function warn(...arguments: any[]): void;
        /**
         * <p>Log an informational message. Similar to {@link apex.debug.message} with the level set to INFO.</p>
         * @example
         * <caption>This example prints an informational message to the console if the log level is
         *    INFO or greater.</caption>
         * apex.debug.info( "Command successful" );
         * @param arguments - Any number of parameters which will be logged to the console.
         */
        function info(...arguments: any[]): void;
        /**
         * <p>Log a trace message. Similar to {@link apex.debug.message} with the level set to APP_TRACE.</p>
         * @example
         * <caption>This example writes a log message to the console if the debug log level is APP_TRACE
         *   or greater.</caption>
         * apex.debug.trace( "Got click event: ", event );
         * @param arguments - Any number of parameters which will be logged to the console.
         */
        function trace(...arguments: any[]): void;
        /**
         * <p>Log a message. Similar to {@link apex.debug.message} with the level set to the highest level.</p>
         * @example
         * <caption>This example gets the logging level and writes it to the console,
         *   regardless of the current logging level.</caption>
         * apex.debug.log( "Level=", apex.debug.getLevel() );
         * @param arguments - Any number of parameters which will be logged to the console.
         */
        function log(...arguments: any[]): void;
    }
    /**
     * This namespace holds all Dynamic Action functions in Oracle Application Express, useful for Dynamic Action plug-in developers.
     */
    namespace da {
        /**
         * <p>For Dynamic Action plug-in developers that write plug-ins that perform Ajax calls, call this function to resume
         * execution of the actions in a dynamic action. Execution of a dynamic action can be paused, if the action's <em>Wait for Result</em>
         * attribute is checked. <em>Wait for Result</em> is a dynamic action plug-in standard attribute designed for use with
         * Ajax-based dynamic actions. If a plug-in exposes this attribute, it will also need to resume execution by calling
         * this function in the relevant place in the plug-in JavaScript code (otherwise your action will break execution of
         * dynamic actions).</p>
         * <p>Note: You should call <em>resume</em> following successful execution of your plug-in logic. In the case where an error
         * has occurred, you must instead call {@link apex.da.handleAjaxErrors} which will handle resuming execution for you.</p>
         * @example
         * <caption>
         * <p>Resume execution of the actions in a dynamic action, indicating that no error has occurred (for example from a "success"
         * callback of an Ajax-based action).</p>
         * <p>Note: When executing dynamic action JavaScript logic, you have access to the 'this' variable, which contains
         * important dynamic action context information. The 'this' variable contains a property called 'resumeCallback',
         * which is a callback function to handle resuming execution of dynamic actions, and is what you need to pass
         * for the <em>pCallback</em> parameter.</p></caption>
         * apex.da.resume( this.resumeCallback, false );
         * @param pCallback - Reference to callback function available from the this.resumeCallback
         *                                      property, handles resuming execution of the dynamic action.
         * @param pErrorOccurred - Indicate to the framework whether an error has occurred. If an error
         *                                      has occurred and the action's <em>Stop Execution on Error</em> attribute
         *                                      is checked, execution of the dynamic action will be stopped.
         */
        function resume(pCallback: (...params: any[]) => any, pErrorOccurred: boolean): void;
        /**
         * <p>For Dynamic Action plug-in developers, call this function to stop execution of the remaining actions in a
         * dynamic action without indicating there was an error.
         * Returning false from the JavaScript function indicates that there has been an error which
         * stops execution of the remaining actions only if the Stop Execution On Error setting is true. This function is
         * useful to stop execution of remaining actions regardless of the Stop Execution On Error setting and also
         * when the action is asynchronous.</p>
         * @example
         * <caption>The following example of a plug-in JavaScript function is asynchronous due to the setTimeout
         * function. It will cancel the remaining actions based on the result of function <code>someCondition</code>.</caption>
         * var self = this;
         * setTimeout( function() {
         *     if ( someCondition() ) {
         *         apex.da.cancel(); // don't process any more actions
         *     } else {
         *         doSomething();
         *     }
         *     apex.da.resume( self.resumeCallback, false );
         * }, 800 );
         */
        function cancel(): void;
        /**
         * For Dynamic Action plug-in developers that write plug-ins that perform Ajax calls, call this function when
         * an Ajax error occurs. Doing so handles both displaying the error message appropriately, and also resuming
         * execution of actions in a dynamic action. It is typically passed as a callback to the <em>error</em> option passed in the
         * <em>pOptions</em> parameter of the {@link apex.server|apex.server} Ajax APIs.
         * @example
         * <caption>The following example shows a typical use case of handleAjaxErrors.</caption>
         * // When executing dynamic action JavaScript logic, you have access to the 'this' variable, which contains
         * // important dynamic action context information. The 'this' variable contains a property called 'resumeCallback',
         * // which is a callback function to handle resuming execution of the actions in a dynamic action.
         * var lResumeCallback = this.resumeCallback;
         *
         * // Define a function that calls handleAjaxErrors
         * // Note: Pass the pjqXHR, pTextStatus and pErrorThrown straight down from the apex.server error callback
         * function _error( pjqXHR, pTextStatus, pErrorThrown ) {
         *     apex.da.handleAjaxErrors( pjqXHR, pTextStatus, pErrorThrown, lResumeCallback );
         * }
         *
         * // In the plug-in's Ajax logic, pass the callback to the 'error' option
         * server.plugin ( lAction.ajaxIdentifier, {
         *     // pData options
         * }, {
         *     error           : _error
         *     // pOptions options
         * });
         * @param pjqXHR - The jqXHR object passed directly from the apex.server error callback.
         * @param pTextStatus - The text status of the error, passed directly from the apex.server error callback.
         * @param pErrorThrown - Text describing the actual error, passed directly from the apex.server error callback.
         * @param pResumeCallback - Reference to callback function available from the this.resumeCallback property,
         *                                      handles resuming execution of the dynamic action.
         */
        function handleAjaxErrors(pjqXHR: any, pTextStatus: string, pErrorThrown: string, pResumeCallback: (...params: any[]) => any): void;
    }
    /**
     * This namespace is used to store all event related functions of Oracle Application Express.
     */
    namespace event {
        /**
         * Function used to trigger events, return value defines if the event should be cancelled.
         * @example
         * <caption>Example shows triggering an event called 'click', on an element using the jQuery selector
         * '#myLink' (matches an element with id='myLink'), passing an array of data.</caption>
         * lCancelEvent = apex.event.trigger('#myLink', 'click', ['apples','pears']);
         * @param pSelector - Selector for the element upon which the event will be triggered
         * @param pEvent - The name of the event
         * @param [pData] - Optional additional parameters to pass along to the event handler
         * @returns true if the event is cancelled.
         */
        function trigger(pSelector: jQuery, pEvent: string, pData?: string | any[] | any): boolean;
    }
    /**
     * <p>The apex.item namespace contains global functions related to Oracle Application Express items.
     * The {@link apex.item.create} function defines the behavior for an item type.
     * The {@link apex.item} function provides access to an {@link item} interface for a specific item. </p>
     */
    namespace item {
        /**
         * <p>This function is only for item plug-in developers. It provides a plug-in specific implementation for the item.
         * This is necessary to seamlessly integrate a plug-in item type with the built-in item
         * related client-side functionality of Oracle Application Express.</p>
         * @example
         * <caption>The following example shows a call to apex.item.create( pNd, pItemImpl )
         *   with most available callbacks and properties passed to illustrate the syntax (although
         *   it is unlikely that any plug-in needs to supply all of these).</caption>
         * apex.item.create( "P100_COMPANY_NAME", {
         *     displayValueFor: function( pValue ) {
         *         var lDisplayValue;
         *         // code to determine the display value for pValue
         *         return lDisplayValue;
         *     },
         *     getPopupSelector: function() {
         *         return "<some CSS selector>";
         *     },
         *     getValidity: function() {
         *         var lValidity = { valid: true };
         *         if ( <item is not valid expression> ) {
         *             lValidity.valid = false;
         *         }
         *         return lValidity;
         *     },
         *     getValidationMessage: function() {
         *         // return validation message if invalid or empty string otherwise
         *     },
         *     getValue: function() {
         *         var lValue;
         *         // code to determine lValue based on the item type.
         *         return lValue;
         *     },
         *     setValue: function( pValue, pDisplayValue ) {
         *         // code that sets pValue and pDisplayValue (if required), for the item type
         *     },
         *     reinit: function( pValue, pDisplayValue ) {
         *         // set the value possibly using code like
         *         // this.setValue( pValue, null, true );
         *         return function() {
         *            // make an ajax call that gets new option values for the item
         *         }
         *     },
         *     disable: function() {
         *         // code that disables the item type
         *     },
         *     enable: function() {
         *         // code that enables the item type
         *     },
         *     isDisabled: function() {
         *         // return true if item is disabled and false otherwise
         *     }
         *     show: function() {
         *         // code that shows the item type
         *     },
         *     hide: function() {
         *         // code that hides the item type
         *     },
         *     isChanged: function() {
         *         var lChanged;
         *         // code to determine if the value has changed
         *         return lChanged;
         *     },
         *     addValue: function( pValue ) {
         *         // code that adds pValue to the values already in the item type
         *     },
         *     nullValue: "<null return value for the item>",
         *     setFocusTo: $( "<some jQuery selector>" ),
         *     setStyleTo: $( "<some jQuery selector>" ),
         *     afterModify: function(){
         *         // code to always fire after the item has been modified (value set, enabled, etc.)
         *     },
         *     loadingIndicator: function( pLoadingIndicator$ ){
         *         // code to add the loading indicator in the best place for the item
         *         return pLoadingIndicator$;
         *     }
         * });
         *
         *
         * @example
         * <caption>The following example shows a call to apex.item.create( pNd, pItemImpl )
         *   with delayLoading option set to true. Doing so results in the create function returning a
         *   deferred object, which must be later resolved in order for page load to complete.</caption>
         * var lDeferred = apex.item.create( "P100_COMPANY_NAME", {
         *     delayLoading: true
         * });
         *
         * // At some point later in the code when the item has finished its initialization, resolve the deferred object
         * lDeferred.resolve();
         * @param pNd - The page or column item name (element id) or DOM node.
         * @param pItemImpl - An object with properties that provide any functions needed to customize the
         * Oracle Application Express item instance behavior. The {@link item} interface has default implementations
         * for each of its methods that are appropriate for many page items particularly for items that use standard
         * form elements. For each method of {@Link item} you should check if the default handling is appropriate for
         * your item plug-in. If it isn't you can provide your own implementation of the corresponding function
         * through this pItemImpl object. The default behavior is used for any functions omitted.
         * <p>ItemImpl can contain any of the following properties:</p>
         * @param pItemImpl.addValue - <em>function(value, displayValue)</em> Specify a function for adding a value to the item,
         * where the item supports multiple values. This is called by the {@link item#addValue} method which has no default
         * behavior for adding a value. Currently there is no client-side functionality of Oracle Application Express dependent on this.
         * <p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p>
         * @param pItemImpl.afterModify - <em>function()</em> Specify a function that is called after an item is modified.
         *   This is useful, for example as some frameworks need to be notified if widgets are
         *   modified, for example their value has been set, or they have been disabled in order to keep both the native
         *   and enhanced controls in sync. This callback provides the hook to do so.
         *   <p class="important">Note: This callback is deprecated.</p>
         * @param pItemImpl.delayLoading - <p>Specify if the item needs to delay APEX page loading. There are many places
         * in the APEX framework where client-side logic is run after the page has finished loading, for example Dynamic Actions
         * set to 'Fire on Initialization', or code defined in the page level attribute 'Execute when Page Loads'. If an item
         * takes longer to initialize (for example if it uses a module loader like requirejs to load additional modules,
         * or if the underlying JavaScript widget itself takes longer to initialize), setting delayLoading to true allows
         * you to tell APEX to wait for your item to finish initializing, before firing it's built in page load logic. This
         * allows you as a developer to ensure that your item is compatible with these built-in APEX features like Dynamic
         * Actions.</p>
         * <p>When this is set to true, <em>apex.item.create</em> will return a <code class="prettyprint">jQuery</code> deferred object, which will need to be resolved in order
         * for page loading to complete.</p>
         * <p>Note: If using this option, you must ensure your item initializes as quickly as possible, and also that
         * the returned deferred object is always resolved, to avoid disrupting the default APEX page load behavior.</p>
         * @param pItemImpl.disable - <em>function()</em> Specify a function for disabling the item, which overrides the
         *   default {@link item#disable} behavior. The default behavior sets the disabled property of the item node to true.
         *   Providing this override could be useful for example where the item consists of compound elements which
         *   also need disabling, or if the item is based on a widget that already has its own disable method that you want
         *   to reuse. Ensuring the item can disable correctly means certain item related client-side functionality of
         *   Oracle Application Express still works, for example when using the Disable action of a Dynamic Action to disable
         *   the item.
         *   <p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p>
         * @param pItemImpl.displayValueFor - <em>function(value):string</em> Specify a function that returns a string
         *   display value that corresponds to the given value. This overrides the default behavior of the
         *   {@link item#displayValueFor} method. The default behavior supports a normal select element and conceals the
         *   value of password inputs.
         * @param pItemImpl.enable - <em>function()</em> Specify a function for enabling the item, which overrides the
         *   default {@link item#enable} behavior. The default behavior sets the disabled property of the item node to false.
         *   Providing this override could be useful for example where the item consists of compound elements which
         *   also need enabling, or if the item is based on a widget that already has its own enable method that you want
         *   to reuse. Ensuring the item can enable correctly means certain item related client-side functionality
         *   of Oracle Application Express still works, for example when using the Enable action of a Dynamic Action
         *   to enable the item.
         *   <p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p>
         * @param pItemImpl.getValidationMessage - <em>function():string</em> Specify a function to return the
         *   validation message, which overrides the default {@link item#getValidationMessage} behavior.
         * @param pItemImpl.getValidity - <em>function():ValidityState</em> Specify a function that returns a
         *   validity state object, which overrides the default {@link item#getValidity} behavior.
         *   The returned object must at a minimum have the Boolean valid property. It may include any of the properties
         *   defined for the HTML5 ValidityState object. The default implementation returns the validity object of
         *   the item element if there is one otherwise it returns { valid: true }.
         * @param pItemImpl.getValue - <em>function():string</em> Specify a function for getting the item's value,
         *   which overrides the default {@link item#getValue} behavior. The default behavior handles
         *   the standard HTML form elements. Ensuring the item returns its value correctly means certain item related
         *   client-side functionality of Oracle Application Express still works, for example in Dynamic Actions to evaluate
         *   a When condition on the item, or when calling the JavaScript function {@link $v} to get the item's value.
         * @param pItemImpl.hide - <em>function()</em> Specify a function for hiding the item, which overrides the default
         *   {@link item#hide} behavior. This could be useful for example where the item consists of compound elements which also
         *   need hiding, or if the item is based on a widget that already has its own hide method that you want to reuse.
         *   Ensuring the item can hide correctly means certain item related client-side functionality of Application
         *   Express still works, for example when using the Hide action of a Dynamic Action, to hide the item.
         *   <p>Note: if the item is in an element with an id that matches the name of the item with a '_CONTAINER' suffix
         *   then the container element is hidden and this function is not called.</p>
         * @param pItemImpl.isChanged - <em>function():Boolean</em> Specify a function that returns true if the
         *   current value of the item has changed and false otherwise, which overrides the default {@link item#isChanged}
         *   behavior. This function allows the Warn on Unsaved Changes feature to work.
         *   The default implementation uses built-in functionality of HTML form elements to detect changes.
         *   If this function does not work correctly then changes to the plug-in item type value will not be
         *   detect and the user will not be warned when they leave the page.
         * @param pItemImpl.isDisabled - <em>function():Boolean</em> Specify a function that returns true if the
         *   item is disabled and false otherwise, which overrides the default {@link item#isDisabled} behavior.
         *   Ensuring the item returns its value correctly means certain item related client-side functionality of
         *   Oracle Application Express still works, for example client-side validation and Interactive Grid.
         * @param pItemImpl.getPopupSelector - <em>function():string</em> Specify a function that returns a
         *   CSS selector that locates the popup used by the item.
         *   Any plug-in item type that uses a popup (a div added near the end of the document
         *   that is positioned near the input item and floating above it) needs to provide a CSS selector that locates
         *   the top level element of the popup. This allows the item type to be used in the Interactive Grid region or
         *   any other region that needs to coordinate focus with the popup. The default implementation returns null.
         *   <p>In addition the top level popup element must be focusable (have attribute tabindex = -1).</p>
         *   <p>For best behavior of a popup in the Interactive Grid. The popup should:
         *   <ul>
         *   <li>have a way of taking focus</li>
         *   <li>close on escape when it has focus</li>
         *   <li>close when the element it is attached to loses focus</li>
         *   <li>return focus to the element that opened the popup when it closes</li>
         *   <li>manage its tab stops so they cycle in the popup or return to the element that opened the popup at the ends</li>
         *   </ul>
         * @param pItemImpl.loadingIndicator - <em>function(loadingIndicator$):jQuery</em> Specify a function that normalizes
         *   how the item's loading indicator is displayed during a partial page refresh of the item.
         *   This function must pass the pLoadingIndicator$ parameter as the first parameter, which contains a
         *   jQuery object with a reference to the DOM element for the loading indicator. The function then adds
         *   this loading indicator to the appropriate DOM element on the page for the item, and also returns the
         *   jQuery object reference to the loading indicator, such that the framework has a reference to it,
         *   so it can remove it once the call is complete.
         *   <p>This is used, for example, if the item is a Cascading LOV and the Cascading LOV Parent Item changes,
         *   or when setting the item's value by using one of the server-side Dynamic Actions such as
         *   Set Value - SQL Statement.</p>
         * @param pItemImpl.nullValue - Specify a value to be used to determine if the item is null.
         *   This is used when the item supports definition of a List of Values, where a developer can define a
         *   Null Return Value for the item and where the default item handling needs to know this in order to
         *   assert if the item is null or empty. This can be done by following these steps:
         *   <p>From the Render function in the plug-in definition, emit the value stored in p_item.lov_null_value as
         *   part of the item initialization JavaScript code that fires when the page loads. For example:
         *   <pre class=class="prettyprint"><code>
         *   # Assumes that you have some JavaScript function called 'com_your_company_your_item'
         *   # that accepts 2 parameters, the first being the name of the item and the second being
         *   # an object storing properties (say pOptions) required by the item's client side code.
         *   apex_javascript.add_onload_code (
         *       p_code => 'com_your_company_your_item('||
         *           apex_javascript.add_value(
         *               apex_plugin_util.page_item_names_to_jquery(p_item.name)||', {'||
         *           apex_javascript.add_attribute(
         *               'lovNullValue', p_item.lov_null_value, false, false)||
         *      '});' );
         *   </code></pre>
         *   <p>Then, in the implementation of com_your_company_your_item( pName, pOptions ) you have the value defined for
         *   the specific item's Null Return Value in the pOptions.lovNullValue property. This can then be used in your
         *   call to {@link apex.item.create}, to set the nullValue property.</p>
         *   <p>Ensuring the nullValue property is set means certain item related client-side functionality of
         *   Oracle Application Express still works, for example, in Dynamic Actions to correctly evaluate an is null
         *   or is not null when condition on the item, or when calling the JavaScript function
         *   {@link item#isEmpty} to determine if the item is null.</p>
         * @param pItemImpl.refresh - <em>function()</em> Specify a function to refresh the item.
         * This is called by the {@link item#refresh} method. The default behavior triggers event "apexrefresh"
         * for legacy plug-in items.
         * @param pItemImpl.reinit - <em>function(value, display):function</em> Specify a function to
         *   initialize an item's value when it is reused in a new context. This is only called for column items every time
         *   a new record is being edited. The default behaviour calls {@link item#setValue} and suppresses the change event.
         *   Items that support cascading LOVs should implement this function to first set the item's value (which may also
         *   require adding the value as an option in the item), then return a function where the cascade will take place.
         * @param pItemImpl.removeValue - <em>function(value)</em> Specify a function for removing a value from the item,
         * where the item supports multiple values. This is called by the {@link item#removeValue} method which has no default
         * behavior for removing a value. Currently there is no client-side functionality of Oracle Application Express dependent on this.
         * <p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p>
         * @param pItemImpl.setFocusTo - Specify the element to receive focus
         *   when focus is set to the item using the {@link item#setFocus} method. This can be defined as either a jQuery
         *   selector, jQuery object or DOM Element which identifies the DOM element, or a no argument function that returns a jQuery
         *   object referencing the element. This can be useful when the item consists of compound elements,
         *   and you do not want focus to go to the element that has an ID matching the item name, which is the
         *   default behavior.
         *   <p>Ensuring the item sets focus correctly means certain item related client-side functionality of
         *   Oracle Application Express still works, for example when using the Set Focus action of a Dynamic Action to
         *   set focus to the item, when users follow the Go to Error link that displays in a validation error
         *   message to go straight to the associated item, or when the item is the first item on a page and
         *   the developer has the page level attribute Cursor Focus set to First item on page.</p>
         * @param pItemImpl.setStyleTo - Specify the element to receive style, when style is set to
         *   the item using the {@link item#setStyle} method. This can be defined as either a jQuery selector,
         *   jQuery object or DOM Element which identifies the DOM element(s), or a no argument function that returns a jQuery object
         *   referencing the element(s). This is useful when the item consists of compound elements, and you do not
         *   want style to be set to the element or just the element, that has an ID matching the item name which is
         *   the default behavior.
         *   <p>Ensuring the item sets style correctly means certain item related client-side
         *   functionality of Oracle Application Express still works, for example when using the Set Style action of a
         *   Dynamic Action to add style to the item.</p>
         *   <p>Note: Even if this property is defined, the default behavior of {@link item#setStyle} calls the afterModify method.</p>
         * @param pItemImpl.setValue - <em>function(value, displayValue, suppressChangeEvent)</em> Specify a function for
         *   setting the item's value, which overrides the default {@link item#setValue} behavior. The default behavior handles
         *   the standard HTML form elements. Ensuring the item can set its value correctly means certain item related
         *   client-side functionality of Oracle Application Express still works, for example
         *   when using the Set Value action of a Dynamic Action to set the item's value, or when calling the
         *   JavaScript function {@link $s} to set the item's value.
         *   <p>Note: Even when this function is defined, the default handling always calls the afterModify function and
         *   triggers the change event according to the pSuppressChangeEvent parameter. The pSuppressChangeEvent parameter
         *   is provided to this function for informational purpose only. In most cases it can be ignored.</p>
         * @param pItemImpl.show - <em>function()</em> Specify a function for showing the item, which overrides the
         *   default {@link item#show} behavior. This is useful for example where the item consists of compound elements which
         *   also need showing, or if the item is based on a widget that already has its own show method that you want
         *   to reuse. Ensuring the item can show correctly means certain item related client-side functionality of
         *   Oracle Application Express still works, for example when using the Show action of a Dynamic Action, to show the item.
         *   <p>Note: if the item is in an element with an id that matches the name of the item with a '_CONTAINER' suffix
         *   then the container element is shown and this function is not called.</p>
         * @returns Returns a <code class="prettyprint">jQuery</code> Deferred object when delayLoading is set to true. The <code class="prettyprint">jQuery</code> deferred object must
         * be resolved in order for APEX page load to complete. If delayLoading is set to false (the default), then nothing is
         * returned.
         */
        function create(pNd: Element | string, pItemImpl: {
            addValue: (...params: any[]) => any;
            afterModify: (...params: any[]) => any;
            delayLoading: boolean;
            disable: (...params: any[]) => any;
            displayValueFor: (...params: any[]) => any;
            enable: (...params: any[]) => any;
            getValidationMessage: (...params: any[]) => any;
            getValidity: (...params: any[]) => any;
            getValue: (...params: any[]) => any;
            hide: (...params: any[]) => any;
            isChanged: (...params: any[]) => any;
            isDisabled: (...params: any[]) => any;
            getPopupSelector: (...params: any[]) => any;
            loadingIndicator: (...params: any[]) => any;
            nullValue: string;
            refresh: (...params: any[]) => any;
            reinit: (...params: any[]) => any;
            removeValue: (...params: any[]) => any;
            setFocusTo: Element | string | ((...params: any[]) => any);
            setStyleTo: Element | string | ((...params: any[]) => any);
            setValue: (...params: any[]) => any;
            show: (...params: any[]) => any;
        }): any;
    }
    /**
     * <p>The apex.item namespace contains global functions related to Oracle Application Express items.
     * The {@link apex.item.create} function defines the behavior for an item type.
     * The {@link apex.item} function provides access to an {@link item} interface for a specific item. </p>
     */
    namespace item {
        /**
         * <p>This function is only for item plug-in developers. It provides a plug-in specific implementation for the item.
         * This is necessary to seamlessly integrate a plug-in item type with the built-in item
         * related client-side functionality of Oracle Application Express.</p>
         * @example
         * <caption>The following example shows a call to apex.item.create( pNd, pItemImpl )
         *   with most available callbacks and properties passed to illustrate the syntax (although
         *   it is unlikely that any plug-in needs to supply all of these).</caption>
         * apex.item.create( "P100_COMPANY_NAME", {
         *     displayValueFor: function( pValue ) {
         *         var lDisplayValue;
         *         // code to determine the display value for pValue
         *         return lDisplayValue;
         *     },
         *     getPopupSelector: function() {
         *         return "<some CSS selector>";
         *     },
         *     getValidity: function() {
         *         var lValidity = { valid: true };
         *         if ( <item is not valid expression> ) {
         *             lValidity.valid = false;
         *         }
         *         return lValidity;
         *     },
         *     getValidationMessage: function() {
         *         // return validation message if invalid or empty string otherwise
         *     },
         *     getValue: function() {
         *         var lValue;
         *         // code to determine lValue based on the item type.
         *         return lValue;
         *     },
         *     setValue: function( pValue, pDisplayValue ) {
         *         // code that sets pValue and pDisplayValue (if required), for the item type
         *     },
         *     reinit: function( pValue, pDisplayValue ) {
         *         // set the value possibly using code like
         *         // this.setValue( pValue, null, true );
         *         return function() {
         *            // make an ajax call that gets new option values for the item
         *         }
         *     },
         *     disable: function() {
         *         // code that disables the item type
         *     },
         *     enable: function() {
         *         // code that enables the item type
         *     },
         *     isDisabled: function() {
         *         // return true if item is disabled and false otherwise
         *     }
         *     show: function() {
         *         // code that shows the item type
         *     },
         *     hide: function() {
         *         // code that hides the item type
         *     },
         *     isChanged: function() {
         *         var lChanged;
         *         // code to determine if the value has changed
         *         return lChanged;
         *     },
         *     addValue: function( pValue ) {
         *         // code that adds pValue to the values already in the item type
         *     },
         *     nullValue: "<null return value for the item>",
         *     setFocusTo: $( "<some jQuery selector>" ),
         *     setStyleTo: $( "<some jQuery selector>" ),
         *     afterModify: function(){
         *         // code to always fire after the item has been modified (value set, enabled, etc.)
         *     },
         *     loadingIndicator: function( pLoadingIndicator$ ){
         *         // code to add the loading indicator in the best place for the item
         *         return pLoadingIndicator$;
         *     }
         * });
         *
         *
         * @example
         * <caption>The following example shows a call to apex.item.create( pNd, pItemImpl )
         *   with delayLoading option set to true. Doing so results in the create function returning a
         *   deferred object, which must be later resolved in order for page load to complete.</caption>
         * var lDeferred = apex.item.create( "P100_COMPANY_NAME", {
         *     delayLoading: true
         * });
         *
         * // At some point later in the code when the item has finished its initialization, resolve the deferred object
         * lDeferred.resolve();
         * @param pNd - The page or column item name (element id) or DOM node.
         * @param pItemImpl - An object with properties that provide any functions needed to customize the
         * Oracle Application Express item instance behavior. The {@link item} interface has default implementations
         * for each of its methods that are appropriate for many page items particularly for items that use standard
         * form elements. For each method of {@Link item} you should check if the default handling is appropriate for
         * your item plug-in. If it isn't you can provide your own implementation of the corresponding function
         * through this pItemImpl object. The default behavior is used for any functions omitted.
         * <p>ItemImpl can contain any of the following properties:</p>
         * @param pItemImpl.addValue - <em>function(value, displayValue)</em> Specify a function for adding a value to the item,
         * where the item supports multiple values. This is called by the {@link item#addValue} method which has no default
         * behavior for adding a value. Currently there is no client-side functionality of Oracle Application Express dependent on this.
         * <p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p>
         * @param pItemImpl.afterModify - <em>function()</em> Specify a function that is called after an item is modified.
         *   This is useful, for example as some frameworks need to be notified if widgets are
         *   modified, for example their value has been set, or they have been disabled in order to keep both the native
         *   and enhanced controls in sync. This callback provides the hook to do so.
         *   <p class="important">Note: This callback is deprecated.</p>
         * @param pItemImpl.delayLoading - <p>Specify if the item needs to delay APEX page loading. There are many places
         * in the APEX framework where client-side logic is run after the page has finished loading, for example Dynamic Actions
         * set to 'Fire on Initialization', or code defined in the page level attribute 'Execute when Page Loads'. If an item
         * takes longer to initialize (for example if it uses a module loader like requirejs to load additional modules,
         * or if the underlying JavaScript widget itself takes longer to initialize), setting delayLoading to true allows
         * you to tell APEX to wait for your item to finish initializing, before firing it's built in page load logic. This
         * allows you as a developer to ensure that your item is compatible with these built-in APEX features like Dynamic
         * Actions.</p>
         * <p>When this is set to true, <em>apex.item.create</em> will return a <code class="prettyprint">jQuery</code> deferred object, which will need to be resolved in order
         * for page loading to complete.</p>
         * <p>Note: If using this option, you must ensure your item initializes as quickly as possible, and also that
         * the returned deferred object is always resolved, to avoid disrupting the default APEX page load behavior.</p>
         * @param pItemImpl.disable - <em>function()</em> Specify a function for disabling the item, which overrides the
         *   default {@link item#disable} behavior. The default behavior sets the disabled property of the item node to true.
         *   Providing this override could be useful for example where the item consists of compound elements which
         *   also need disabling, or if the item is based on a widget that already has its own disable method that you want
         *   to reuse. Ensuring the item can disable correctly means certain item related client-side functionality of
         *   Oracle Application Express still works, for example when using the Disable action of a Dynamic Action to disable
         *   the item.
         *   <p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p>
         * @param pItemImpl.displayValueFor - <em>function(value):string</em> Specify a function that returns a string
         *   display value that corresponds to the given value. This overrides the default behavior of the
         *   {@link item#displayValueFor} method. The default behavior supports a normal select element and conceals the
         *   value of password inputs.
         * @param pItemImpl.enable - <em>function()</em> Specify a function for enabling the item, which overrides the
         *   default {@link item#enable} behavior. The default behavior sets the disabled property of the item node to false.
         *   Providing this override could be useful for example where the item consists of compound elements which
         *   also need enabling, or if the item is based on a widget that already has its own enable method that you want
         *   to reuse. Ensuring the item can enable correctly means certain item related client-side functionality
         *   of Oracle Application Express still works, for example when using the Enable action of a Dynamic Action
         *   to enable the item.
         *   <p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p>
         * @param pItemImpl.getValidationMessage - <em>function():string</em> Specify a function to return the
         *   validation message, which overrides the default {@link item#getValidationMessage} behavior.
         * @param pItemImpl.getValidity - <em>function():ValidityState</em> Specify a function that returns a
         *   validity state object, which overrides the default {@link item#getValidity} behavior.
         *   The returned object must at a minimum have the Boolean valid property. It may include any of the properties
         *   defined for the HTML5 ValidityState object. The default implementation returns the validity object of
         *   the item element if there is one otherwise it returns { valid: true }.
         * @param pItemImpl.getValue - <em>function():string</em> Specify a function for getting the item's value,
         *   which overrides the default {@link item#getValue} behavior. The default behavior handles
         *   the standard HTML form elements. Ensuring the item returns its value correctly means certain item related
         *   client-side functionality of Oracle Application Express still works, for example in Dynamic Actions to evaluate
         *   a When condition on the item, or when calling the JavaScript function {@link $v} to get the item's value.
         * @param pItemImpl.hide - <em>function()</em> Specify a function for hiding the item, which overrides the default
         *   {@link item#hide} behavior. This could be useful for example where the item consists of compound elements which also
         *   need hiding, or if the item is based on a widget that already has its own hide method that you want to reuse.
         *   Ensuring the item can hide correctly means certain item related client-side functionality of Application
         *   Express still works, for example when using the Hide action of a Dynamic Action, to hide the item.
         *   <p>Note: if the item is in an element with an id that matches the name of the item with a '_CONTAINER' suffix
         *   then the container element is hidden and this function is not called.</p>
         * @param pItemImpl.isChanged - <em>function():Boolean</em> Specify a function that returns true if the
         *   current value of the item has changed and false otherwise, which overrides the default {@link item#isChanged}
         *   behavior. This function allows the Warn on Unsaved Changes feature to work.
         *   The default implementation uses built-in functionality of HTML form elements to detect changes.
         *   If this function does not work correctly then changes to the plug-in item type value will not be
         *   detect and the user will not be warned when they leave the page.
         * @param pItemImpl.isDisabled - <em>function():Boolean</em> Specify a function that returns true if the
         *   item is disabled and false otherwise, which overrides the default {@link item#isDisabled} behavior.
         *   Ensuring the item returns its value correctly means certain item related client-side functionality of
         *   Oracle Application Express still works, for example client-side validation and Interactive Grid.
         * @param pItemImpl.getPopupSelector - <em>function():string</em> Specify a function that returns a
         *   CSS selector that locates the popup used by the item.
         *   Any plug-in item type that uses a popup (a div added near the end of the document
         *   that is positioned near the input item and floating above it) needs to provide a CSS selector that locates
         *   the top level element of the popup. This allows the item type to be used in the Interactive Grid region or
         *   any other region that needs to coordinate focus with the popup. The default implementation returns null.
         *   <p>In addition the top level popup element must be focusable (have attribute tabindex = -1).</p>
         *   <p>For best behavior of a popup in the Interactive Grid. The popup should:
         *   <ul>
         *   <li>have a way of taking focus</li>
         *   <li>close on escape when it has focus</li>
         *   <li>close when the element it is attached to loses focus</li>
         *   <li>return focus to the element that opened the popup when it closes</li>
         *   <li>manage its tab stops so they cycle in the popup or return to the element that opened the popup at the ends</li>
         *   </ul>
         * @param pItemImpl.loadingIndicator - <em>function(loadingIndicator$):jQuery</em> Specify a function that normalizes
         *   how the item's loading indicator is displayed during a partial page refresh of the item.
         *   This function must pass the pLoadingIndicator$ parameter as the first parameter, which contains a
         *   jQuery object with a reference to the DOM element for the loading indicator. The function then adds
         *   this loading indicator to the appropriate DOM element on the page for the item, and also returns the
         *   jQuery object reference to the loading indicator, such that the framework has a reference to it,
         *   so it can remove it once the call is complete.
         *   <p>This is used, for example, if the item is a Cascading LOV and the Cascading LOV Parent Item changes,
         *   or when setting the item's value by using one of the server-side Dynamic Actions such as
         *   Set Value - SQL Statement.</p>
         * @param pItemImpl.nullValue - Specify a value to be used to determine if the item is null.
         *   This is used when the item supports definition of a List of Values, where a developer can define a
         *   Null Return Value for the item and where the default item handling needs to know this in order to
         *   assert if the item is null or empty. This can be done by following these steps:
         *   <p>From the Render function in the plug-in definition, emit the value stored in p_item.lov_null_value as
         *   part of the item initialization JavaScript code that fires when the page loads. For example:
         *   <pre class=class="prettyprint"><code>
         *   # Assumes that you have some JavaScript function called 'com_your_company_your_item'
         *   # that accepts 2 parameters, the first being the name of the item and the second being
         *   # an object storing properties (say pOptions) required by the item's client side code.
         *   apex_javascript.add_onload_code (
         *       p_code => 'com_your_company_your_item('||
         *           apex_javascript.add_value(
         *               apex_plugin_util.page_item_names_to_jquery(p_item.name)||', {'||
         *           apex_javascript.add_attribute(
         *               'lovNullValue', p_item.lov_null_value, false, false)||
         *      '});' );
         *   </code></pre>
         *   <p>Then, in the implementation of com_your_company_your_item( pName, pOptions ) you have the value defined for
         *   the specific item's Null Return Value in the pOptions.lovNullValue property. This can then be used in your
         *   call to {@link apex.item.create}, to set the nullValue property.</p>
         *   <p>Ensuring the nullValue property is set means certain item related client-side functionality of
         *   Oracle Application Express still works, for example, in Dynamic Actions to correctly evaluate an is null
         *   or is not null when condition on the item, or when calling the JavaScript function
         *   {@link item#isEmpty} to determine if the item is null.</p>
         * @param pItemImpl.refresh - <em>function()</em> Specify a function to refresh the item.
         * This is called by the {@link item#refresh} method. The default behavior triggers event "apexrefresh"
         * for legacy plug-in items.
         * @param pItemImpl.reinit - <em>function(value, display):function</em> Specify a function to
         *   initialize an item's value when it is reused in a new context. This is only called for column items every time
         *   a new record is being edited. The default behaviour calls {@link item#setValue} and suppresses the change event.
         *   Items that support cascading LOVs should implement this function to first set the item's value (which may also
         *   require adding the value as an option in the item), then return a function where the cascade will take place.
         * @param pItemImpl.removeValue - <em>function(value)</em> Specify a function for removing a value from the item,
         * where the item supports multiple values. This is called by the {@link item#removeValue} method which has no default
         * behavior for removing a value. Currently there is no client-side functionality of Oracle Application Express dependent on this.
         * <p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p>
         * @param pItemImpl.setFocusTo - Specify the element to receive focus
         *   when focus is set to the item using the {@link item#setFocus} method. This can be defined as either a jQuery
         *   selector, jQuery object or DOM Element which identifies the DOM element, or a no argument function that returns a jQuery
         *   object referencing the element. This can be useful when the item consists of compound elements,
         *   and you do not want focus to go to the element that has an ID matching the item name, which is the
         *   default behavior.
         *   <p>Ensuring the item sets focus correctly means certain item related client-side functionality of
         *   Oracle Application Express still works, for example when using the Set Focus action of a Dynamic Action to
         *   set focus to the item, when users follow the Go to Error link that displays in a validation error
         *   message to go straight to the associated item, or when the item is the first item on a page and
         *   the developer has the page level attribute Cursor Focus set to First item on page.</p>
         * @param pItemImpl.setStyleTo - Specify the element to receive style, when style is set to
         *   the item using the {@link item#setStyle} method. This can be defined as either a jQuery selector,
         *   jQuery object or DOM Element which identifies the DOM element(s), or a no argument function that returns a jQuery object
         *   referencing the element(s). This is useful when the item consists of compound elements, and you do not
         *   want style to be set to the element or just the element, that has an ID matching the item name which is
         *   the default behavior.
         *   <p>Ensuring the item sets style correctly means certain item related client-side
         *   functionality of Oracle Application Express still works, for example when using the Set Style action of a
         *   Dynamic Action to add style to the item.</p>
         *   <p>Note: Even if this property is defined, the default behavior of {@link item#setStyle} calls the afterModify method.</p>
         * @param pItemImpl.setValue - <em>function(value, displayValue, suppressChangeEvent)</em> Specify a function for
         *   setting the item's value, which overrides the default {@link item#setValue} behavior. The default behavior handles
         *   the standard HTML form elements. Ensuring the item can set its value correctly means certain item related
         *   client-side functionality of Oracle Application Express still works, for example
         *   when using the Set Value action of a Dynamic Action to set the item's value, or when calling the
         *   JavaScript function {@link $s} to set the item's value.
         *   <p>Note: Even when this function is defined, the default handling always calls the afterModify function and
         *   triggers the change event according to the pSuppressChangeEvent parameter. The pSuppressChangeEvent parameter
         *   is provided to this function for informational purpose only. In most cases it can be ignored.</p>
         * @param pItemImpl.show - <em>function()</em> Specify a function for showing the item, which overrides the
         *   default {@link item#show} behavior. This is useful for example where the item consists of compound elements which
         *   also need showing, or if the item is based on a widget that already has its own show method that you want
         *   to reuse. Ensuring the item can show correctly means certain item related client-side functionality of
         *   Oracle Application Express still works, for example when using the Show action of a Dynamic Action, to show the item.
         *   <p>Note: if the item is in an element with an id that matches the name of the item with a '_CONTAINER' suffix
         *   then the container element is shown and this function is not called.</p>
         * @returns Returns a <code class="prettyprint">jQuery</code> Deferred object when delayLoading is set to true. The <code class="prettyprint">jQuery</code> deferred object must
         * be resolved in order for APEX page load to complete. If delayLoading is set to false (the default), then nothing is
         * returned.
         */
        function create(pNd: Element | string, pItemImpl: {
            addValue: (...params: any[]) => any;
            afterModify: (...params: any[]) => any;
            delayLoading: boolean;
            disable: (...params: any[]) => any;
            displayValueFor: (...params: any[]) => any;
            enable: (...params: any[]) => any;
            getValidationMessage: (...params: any[]) => any;
            getValidity: (...params: any[]) => any;
            getValue: (...params: any[]) => any;
            hide: (...params: any[]) => any;
            isChanged: (...params: any[]) => any;
            isDisabled: (...params: any[]) => any;
            getPopupSelector: (...params: any[]) => any;
            loadingIndicator: (...params: any[]) => any;
            nullValue: string;
            refresh: (...params: any[]) => any;
            reinit: (...params: any[]) => any;
            removeValue: (...params: any[]) => any;
            setFocusTo: Element | string | ((...params: any[]) => any);
            setStyleTo: Element | string | ((...params: any[]) => any);
            setValue: (...params: any[]) => any;
            show: (...params: any[]) => any;
        }): any;
    }
    /**
     * <p>This namespace is used for text and message localization related functions of Oracle Application Express.
     */
    namespace lang {
        /**
         * <p>Add messages for use by {@link apex.lang.getMessage} and the format functions. Can be called multiple times.
         * Additional messages are merged. It is generally not necessary to call this function, because it is
         * automatically called with all the application text messages that have Used in JavaScript set to Yes.</p>
         * @example
         * <caption>This example adds a message with key "APPLY_BUTTON_LABEL" and message text "Apply".</caption>
         * apex.lang.addMessages( {
         *     APPLY_BUTTON_LABEL: "Apply"
         * } );
         * @param pMessages - An object whose properties are message keys, and the values are localized message text.
         */
        function addMessages(pMessages: any): void;
        /**
         * <p>Remove all messages. This method is rarely needed. Many Oracle Application Express components rely on client-side
         * messages, so if you clear the messages you need to add any needed messages again.</p>
         * @example
         * <caption>This example removes all messages.</caption>
         * apex.lang.clearMessages();
         */
        function clearMessages(): void;
        /**
         * <p>Return the message associated with the given key.
         * The key is looked up in the messages added with {@link apex.lang.addMessages}.</p>
         * @example
         * <caption>This example returns "OK" when the localized text for key OK_BTN_LABEL is "OK".</caption>
         * apex.lang.getMessage( "OK_BTN_LABEL" );
         * @param pKey - The message key.
         * @returns The localized message text. If the key is not found then the key is returned.
         */
        function getMessage(pKey: string): string;
        /**
         * <p>Return true if pKey exists in the messages added with {@link apex.lang.addMessages}.</p>
         * @example
         * <caption>This example checks for the existence of a message, "EXTRA_MESSAGE", before using it.</caption>
         * if ( apex.lang.hasMessage( "EXTRA_MESSAGE" ) ) {
         *     text += apex.lang.getMessage( "EXTRA_MESSAGE" );
         * }
         * @param pKey - The message key.
         * @returns true if the given message exists and false otherwise.
         */
        function hasMessage(pKey: string): boolean;
        /**
         * <p>Format a message. Parameters in the message, %0 to %9, are replaced with the corresponding function argument.
         * Use %% to include a single %. The replacement arguments are HTML escaped.
         * @example
         * <caption>This example returns "Process 60% complete" when the PROCESS_STATUS message text is
         *   "Process %0%% complete" and the progress variable value is 60.</caption>
         *   apex.lang.formatMessage( "PROCESS_STATUS", progress );
         * @param pKey - The message key. The key is used to lookup the localized message text as if with getMessage.
         * @param pValues - Any number of replacement values, one for each message parameter %0 to %9.
         *   Non string arguments are converted to strings.
         * @returns The localized and formatted message text. If the key is not found then the key is returned.
         */
        function formatMessage(pKey: string, ...pValues: any[]): string;
        /**
         * <p>Formats a message.
         * Same as {@link apex.lang.formatMessage} except the message pattern is given directly.
         * It is already localized or isn't supposed to be.
         * It is not a key. The replacement arguments are HTML escaped.</p>
         * @example
         * <caption>This example returns "Total cost: $34.00" assuming the orderTotal variable equals "34.00".</caption>
         * apex.lang.format( "Total cost: $%0", orderTotal );
         * @param pPattern - The message pattern.
         * @param pValues - Any number of replacement values, one for each message parameter %0 to %9.
         *   Non string arguments are converted to strings.
         * @returns The formatted message text.
         */
        function format(pPattern: string, ...pValues: any[]): string;
        /**
         * <p>Same as {@link apex.lang.formatMessage} except the replacement arguments are not HTML escaped.
         * They must be known to be safe or will be used in a context that is safe.</p>
         * @example
         * <caption>This example returns "You entered &lt;ok>" when the CONFIRM message text is "You entered %0"
         *   and the inputValue variable value is "&lt;ok>". Note this string must be used in a context where HTML escaping
         *   is done to avoid XSS vulnerabilities.</caption>
         * apex.lang.formatMessageNoEscape( "CONFIRM", inputValue );
         * @param pKey - The message key. The key is used to lookup the localized message text as if with getMessage.
         * @param pValues - Any number of replacement values, one for each message parameter %0 to %9.
         *   Non string arguments are converted to strings.
         * @returns The localized and formatted message text. If the key is not found then the key is returned.
         */
        function formatMessageNoEscape(pKey: string, ...pValues: any[]): string;
        /**
         * <p>Same as {@link apex.lang.format}, except the replacement arguments are not HTML escaped.
         * They must be known to be safe or are used in a context that is safe.</p>
         * @example
         * <caption>This example returns "You entered &lt;ok>" when the inputValue variable value is "&lt;ok>".
         *   Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities.</caption>
         * apex.lang.formatNoEscape( "You entered %0", inputValue );
         * @param pPattern - The message pattern.
         * @param pValues - Any number of replacement values, one for each message parameter %0 to %9.
         *   Non string arguments are converted to strings.
         * @returns The formatted message text.
         */
        function formatNoEscape(pPattern: string, ...pValues: any[]): string;
    }
    /**
     * <p>The apex.locale namespace contains Oracle Application Express functions related to formatting numbers and
     * dates according to a specific locale. For localizing text messages see {@link apex.lang}.</p>
     */
    namespace locale {
        /**
         * <p>Used to determine if the resources needed by some of the {@link apex.locale} functions
         * have been loaded.</p>
         * @example
         * <caption>Wait until the resources are loaded before formatting a number.</caption>
         * apex.locale.resourcesLoaded( function() {
         *     var formattedNumber = apex.locale.formatCompactNumber( 123456789.12 );
         *     // In the US English locale this will log: "The number is: 123.46M"
         *     console.log( "The number is: " + formattedNumber );
         * } );
         * @example
         * <caption>This is the same as the previous example except it uses the returned promise.</caption>
         * var p = apex.locale.resourcesLoaded();
         * p.done( function() {
         *     var formattedNumber = apex.locale.formatCompactNumber( 123456789.12 );
         *     // In the US English locale this will log: "The number is: 123.46M"
         *     console.log( "The number is: " + formattedNumber );
         * } );
         * @example
         * <caption>This checks to see if the resources are loaded.</caption>
         * if ( apex.locale.resourcesLoaded().state() === "resolved" ) {
         *     // resources are loaded
         * } else {
         *     // resources are not yet loaded
         * }
         * @param [pCallback] - A Function to call when the resources have been loaded. If the resources
         * are already loaded the function is called right away.
         * @returns A promise object. The promise is resolved when the resources have been loaded.
         */
        function resourcesLoaded(pCallback?: (...params: any[]) => any): Promise;
        /**
         * Return the database locale specific group separator for numeric values.
         * @returns The group separator. For example "," (US) or "." (Germany).
         */
        function getGroupSeparator(): string;
        /**
         * Return the database locale specific decimal separator for numeric values.
         * @returns The decimal separator. For example "." (US) or "," (Germany).
         */
        function getDecimalSeparator(): string;
        /**
         * Return the database abbreviated month names as an array. First element of the array is the
         * first month of the year in the current locale.
         * @returns Array of abbreviated month names. For example ["Jan","Feb","Mar", ..., "Dec"]
         */
        function getAbbrevMonthNames(): any[];
        /**
         * Return the database abbreviated day names as an array. First element of the array is the
         * first day of the week in the current locale.
         * @returns Array of abbreviated day names. For example ["Sun","Mon","Tue","Wed",...,"Sat"]
         */
        function getAbbrevDayNames(): any[];
        /**
         * Return the current language locale.
         * @returns current language. For example "en", "de", "en-US", ...
         */
        function getLanguage(): string;
        /**
         * Return the database locale specific currency symbol.
         */
        function getCurrency(): string;
        /**
         * Return the database locale specific ISO currency string.
         */
        function getISOCurrency(): string;
        /**
         * Return the database locale specific dual currency symbol.
         */
        function getDualCurrency(): string;
        /**
         * <p>Formats a number using a database format model similar to the SQL <code>TO_CHAR(<i>number</i>)</code> function.</p>
         * <p>See the Oracle SQL Language reference section on Format Models for more information on the
         * pFormat parameter. The format elements RN, TM, and EEEE are not supported.</p>
         * @example
         * <caption>Format the number 1234.569 with locale specific currency symbol and 2 decimal places.</caption>
         * var formattedNumber = apex.locale.formatNumber( 1234.569, "FML999G999G999G999G990D00" );
         * // In the US English locale this will display: "The cost is: $1,234.57"
         * apex.message.alert( "The cost is: " + formattedNumber, function() {
         *      // do something after message is shown if needed
         * } );
         * @param pValue - The number to format.
         * @param [pFormat] - The database format model. The format elements RN, TM, and EEEE are not supported.
         *     If the format is not given the number is returned as a string with no additional formatting.
         * @param [pOptions] - Options to override default locale settings. All properties optional.
         * @param pOptions.NLS_NUMERIC_CHARACTERS - A string where the first letter is the decimal separator and
         *   the second letter is the group separator
         * @param pOptions.NLS_CURRENCY - The local currency string.
         * @param pOptions.NLS_DUAL_CURRENCY - The dual currency string.
         * @param pOptions.NLS_ISO_CURRENCY - The ISO currency string. Note: This option differs from the corresponding
         *   database parameter. It is the ISO currency string such as "CAD" rather than the territory name such as "CANADA".
         * @returns The formatted number.
         */
        function formatNumber(pValue: number, pFormat?: string, pOptions?: {
            NLS_NUMERIC_CHARACTERS: string;
            NLS_CURRENCY: string;
            NLS_DUAL_CURRENCY: string;
            NLS_ISO_CURRENCY: string;
        }): string;
        /**
         * <p>Formats the given number in a compact, locale specific way. For example in the US English locale the
         * number 123400 would be formatted as "123.4K" and 1234000 as "1.23M".</p>
         *
         * <p>This function relies on additional resources that are loaded when the page first loads. Calling this function
         * before the resources are loaded returns the number as an unformatted string. See {@link apex.locale.resourcesLoaded}.</p>
         * @example
         * <caption>Format the large number 123456789.12 in a compact format and display it in an alert message.</caption>
         * var largeNumber = 123456789.12;
         * var formattedNumber = apex.locale.formatCompactNumber( largeNumber );
         * // In the US English locale this will display: "The number is: 123.46M"
         * apex.message.alert( "The number is: " + formattedNumber, function() {
         *      // do something after message is shown if needed
         * } );
         * @example
         * <caption>Format the same large number 123456789.12 in a compact format using an option to not include
         *     any fraction digits.</caption>
         * var largeNumber = 123456789.12;
         * var formattedNumber = apex.locale.formatCompactNumber( largeNumber, { maximumFractionDigits: 0 } );
         * // In the US English locale the formattedNumber is equal to 123M"
         * @param pValue - The number value to be formatted.
         * @param [pOptions] - An options object that affect the way the number is formatted. All properties optional.
         * @param pOptions.maximumFractionDigits - The maximum number of digits to display after the decimal point. Default 2.
         * @param pOptions.minimumFractionDigits - The minimum number of digits to display after the decimal point. Default 0.
         * @param pOptions.minimumIntegerDigits - The minimum number of integer digits to display before the decimal point. Default 1.
         * @param pOptions.roundingMode - One of 'DEFAULT', 'HALF_UP', 'HALF_DOWN', 'HALF_EVEN', 'UP', 'DOWN', 'CEILING', 'FLOOR'.
         *     The default is "DEFAULT".
         * @param pOptions.separators - The characters to use for the decimal and group separator. The default is
         *     to use the appropriate locale specific characters.
         * @param pOptions.separators.decimal - The decimal separator character.
         * @param pOptions.separators.group - The group separator character.
         * @param pOptions.useGrouping - If true use locale specific rules to separate digits into groups.
         *     The default is true.
         * @returns The compact formatted number.
         */
        function formatCompactNumber(pValue: number, pOptions?: {
            maximumFractionDigits: number;
            minimumFractionDigits: number;
            minimumIntegerDigits: number;
            roundingMode: string;
            separators: {
                decimal: string;
                group: string;
            };
            useGrouping: boolean;
        }): string;
    }
    /**
     * The apex.message namespace is used to handle client-side display and management of messages in Oracle Application Express.
     */
    namespace message {
        /**
         * Message type constants
         * @property SUCCESS - Success message Value "success".
         * @property ERROR - Error message Value "error".
         */
        var TYPE: {
            SUCCESS: string;
            ERROR: string;
        };
        /**
         * Allows a theme to influence some behavior offered by the apex.message API. Call this function from theme page
         * initialization code.
         * @example
         * <caption>The following example shows beforeShow and beforeHide callbacks defined, that add and remove an
         * additional class ‘animate-msg’ on the notification element, before the default show and hide logic. This will only
         * happen for success messages because of the check on pMsgType.<br/>
         * Note: The callbacks do not return anything, therefore the default show / hide behavior will happen after the
         * callback.</caption>
         * apex.message.setThemeHooks({
         *     beforeShow: function( pMsgType, pElement$ ){
         *         if ( pMsgType === apex.message.TYPE.SUCCESS ) {
         *             pElement$.addClass( "animate-msg" );
         *         }
         *     },
         *     beforeHide: function( pMsgType, pElement$ ){
         *         if ( pMsgType === apex.message.TYPE.SUCCESS ) {
         *             pElement$.removeClass( "animate-msg" );
         *         }
         *     }
         * });
         * @param pOptions - An object that contains the following properties:
         * @param pOptions.beforeShow - Callback function that will be called prior to the default show
         *     page notification functionality. Optionally return false from the callback to completely override default
         *     show functionality. Callback passes the following parameters:
         *     <ul>
         *         <li>pMsgType: Identifies the message type. Use {@link apex.message.TYPE} to identify whether showing an error or success message.</li>
         *         <li>pElement$: jQuery object containing the element being shown.</li>
         *     </ul>
         * @param pOptions.beforeHide - Callback function that will be called prior to the default hide
         *     page notification functionality. Optionally return false from the callback to completely override default
         *     hide functionality. Callback passes the following parameters:
         *     <ul>
         *         <li>pMsgType: Identifies the message type. Use {@link apex.message.TYPE} to identify whether showing an error or success message.</li>
         *         <li>pElement$: jQuery object containing the element being hidden.</li>
         *     </ul>
         * @param pOptions.closeNotificationSelector - jQuery selector to identify the close buttons in notifications,
         *     defaults to that used by Universal Theme (“button.t-Button—closeAlert”). May be required by custom themes if
         *     you still want to have APEX handle the hide logic, and where messaging contains a close notification button
         *     with a different class.
         */
        function setThemeHooks(pOptions: {
            beforeShow: (...params: any[]) => any;
            beforeHide: (...params: any[]) => any;
            closeNotificationSelector: string;
        }): void;
        /**
         * <p>This function displays all errors on the apex.message error stack. If you do not want to add to the stack,
         * you must first call clearErrors(). Errors will display using the current app’s theme’s templates. For page level
         * messages (where location = “page”), error messages use markup from the page template’s ‘Subtemplate > Notification’
         * attribute. For item level messages (where location = “inline”), error messages use markup from the item’s
         * label template’s ‘Error Display > Error Template’ attribute.</p>
         * <p>Note Theme Developers should bear in mind the following:
         * <ul>
         *     <li>To display errors for a theme correctly, it must define both of the template attributes described above.
         *     In addition, for inline errors the label template must reference the #ERROR_TEMPLATE# substitution string in
         *     either the ‘Before Item’ or ‘After Item’ attributes of your label templates.</li>
         *     <li>As a theme developer, you can influence or override what happens when showing page level errors. For more
         *     information, please refer to {@link apex.message.setThemeHooks}, (specifically the beforeShow
         *     callback function, where you would need to check for ‘pMsgType === apex.message.TYPE.ERROR’ to isolate when
         *     showing page level errors).</li>
         * </ul>
         * @example
         * <caption>In this example, we have 2 new errors to display. We do not want to add to any existing errors
         * that may be displayed, so we first clear any errors. Because we are displaying 2 errors, we pass an array containing
         * 2 error objects. The first error states ‘Name is required!’, and will display at both ‘page’ level, and ‘inline’
         * with the item ‘P1_ENAME’. The message text is considered safe and therefore will not be escaped. The second error
         * states ‘Page error has occurred!’, and will just display at page level, and the message text is considered safe
         * and therefore will not be escaped.</caption>
         * // First clear the errors
         * apex.message.clearErrors();
         *
         * // Now show new errors
         * apex.message.showErrors([
         *     {
         *         type:       "error",
         *         location:   [ "page", "inline" ],
         *         pageItem:   "P1_ENAME",
         *         message:    "Name is required!",
         *         unsafe:     false
         *     },
         *     {
         *         type:       "error",
         *         location:   "page",
         *         message:    "Page error has occurred!",
         *         unsafe:     false
         *     }
         * ]);
         * @param pErrors - An object, or array of objects with the following properties:
         * @param pErrors.type - Must pass “error”, although may support different notification types in the future.
         * @param pErrors.location - Possible values are: “inline”, “page” or [ “inline”, “page” ].
         * @param pErrors.pageItem - Item reference where an ‘inline’ error should display.
         *     Required when location = “inline”.
         * @param pErrors.message - The error message.
         * @param [pErrors.unsafe = true] - Pass true so that the message will be escaped by showErrors. Pass false if the
         *     message is already escaped and does not need to be escaped by showErrors.
         */
        function showErrors(pErrors: {
            type: string;
            location: string | string[];
            pageItem: string;
            message: string;
            unsafe?: boolean;
        }): void;
        /**
         * This function clears all the errors currently displayed on the page.
         * @example
         * <caption>The following example demonstrates clearing all the errors currently displayed on the page.</caption>
         * apex.message.clearErrors();
         */
        function clearErrors(): void;
        /**
         * Displays a page-level success message. This will clear any previous success messages displayed, and also assumes
         * there are no errors, so will clear any errors previously displayed. Success messages will display using the
         * current app’s theme’s template. Specifically for page success messages, the markup from the page template’s
         * ‘Subtemplate > Success Message’ attribute will be used.
         *
         * Tip: As a theme developer, you can influence or override what happens when showing a page-level success message.
         * For more information, please refer to the apex.message.setThemeHooks function (specifically the beforeShow
         * callback function, where you would need to check for ‘pMsgType === apex.message.TYPE.SUCCESS’ to isolate when
         * showing a page-level success message).
         *
         * Tip: As a theme developer, you can influence or override what happens when showing a page-level success message.
         * For more information, please refer to the apex.message.setThemeHooks function (specifically the beforeShow
         * callback function, where you would need to check for ‘pMsgType === apex.message.TYPE.SUCCESS’ to isolate when
         * showing a page-level success message).
         * @example
         * // Displays a page-level success message ‘Changes saved!’.
         * apex.message.showPageSuccess( "Changes saved!" );
         * @param pMessage - The success message to display.
         */
        function showPageSuccess(pMessage: string): void;
        /**
         * Hides the page-level success message.
         *
         * Tip: As a theme developer, you can influence or override what happens when hiding a page-level success message.
         * For more information, please refer to the apex.message.setThemeHooks function (specifically the beforeHide
         * callback function, where you would need to check for ‘pMsgType === apex.message.TYPE.SUCCESS’ to isolate when
         * hiding a page-level success message).
         * @example
         * // Hides the page-level success message.
         * apex.message.hidePageSuccess();
         */
        function hidePageSuccess(): void;
        /**
         * Displays a confirmation dialog with the given message and OK and Cancel buttons. The callback function passed as
         * the pCallback parameter is called when the dialog is closed, and passes true if OK was pressed and false
         * otherwise. The dialog displays using the jQuery UI ‘Dialog’ widget.
         *
         * There are some differences between this function and a browser’s built-in confirm function:
         * - The dialog style will be consistent with the rest of the app.
         * - The dialog can be moved.
         * - The call to apex.message.confirm does not block, and does not return true or false. Any code defined following
         *   the call to apex.message.confirm will run before the user presses OK or Cancel. Therefore acting on the user’s
         *   choice must be done from within the callback, as shown in the example.
         *
         * Note: If either of the following 2 pre-requisites are not met, the function falls back to using the browser’s
         * built-in confirm:
         * - jQuery UI dialog widget code must be loaded on the page.
         * - The browser must be running in ‘Standards’ mode. This is because if it is running in ‘Quirks’ mode (as is the
         *   case with some older themes), this can cause issues with display position, where the dialog positions itself in
         *   the vertical center of the page, rather than the center of the visible viewport.
         * @example
         * // Displays a confirmation message ‘Are you sure?’, and if OK is pressed executes the ‘deleteIt()’ function.
         * apex.message.confirm( "Are you sure?", function( okPressed ) {
         *     if( okPressed ) {
         *         deleteIt();
         *     }
         * });
         * @param pMessage - The message to display in the confirmation dialog
         * @param pCallback - Callback function called when dialog is closed. Function passes the following
         *                              parameter:
         *                              - okPressed: True if OK was pressed, False otherwise (if Cancel pressed, or the
         *                                           dialog was closed by some other means).
         */
        function confirm(pMessage: string, pCallback: (...params: any[]) => any): void;
        /**
         * Displays an alert dialog with the given message and OK button. The callback function passed as the pCallback
         * parameter is called when the dialog is closed. The dialog displays using the jQuery UI ‘Dialog’ widget.
         *
         * There are some differences between this function and a browser’s built-in alert function:
         * - The dialog style will be consistent with the rest of the app.
         * - The dialog can be moved.
         * - The call to apex.message.alert does not block. Any code defined following the call to apex.message.alert will
         *   run before the user presses OK. Therefore code to run after the user closes the dialog must be done from within
         *   the callback, as shown in the example.
         *
         * Note: If either of the following 2 pre-requisites are not met, the function falls back to using the browser’s
         * built-in confirm:
         * - jQuery UI dialog widget code must be loaded on the page.
         * - The browser must be running in ‘Standards’ mode. This is because if it is running in ‘Quirks’ mode (as is the
         *   case with some older themes), this can cause issues with display position, where the dialog positions itself in
         *   the vertical center of the page, rather than the center of the visible viewport.
         * @example
         * // Displays an alert ‘Load complete.’, then after the dialog closes executes the ‘afterLoad()’ function.
         * apex.message.alert( "Load complete.", function(){
         *     afterLoad();
         * });
         * @param pMessage - The message to display in the alert dialog
         * @param pCallback - Callback function called when dialog is closed.
         */
        function alert(pMessage: string, pCallback: (...params: any[]) => any): void;
        /**
         * In order to navigate to items (page items or column items) that have an error (or anything else that can be in an
         * error state), the error item must be visible before it is focused. Any region type that can possibly hide its
         * contents should add a visibility check function using this method. Each function added is called for any region
         * or item that needs to be made visible. This function is for APEX region plug-in developers.
         * @example
         * // For example let’s assume we have a Region plug-in type called 'Expander', that can show or hide its contents
         * // and can contain page items. For purposes of example, this plug-in adds an 't-Expander' class to its region
         * // element and also has an 'expand' method available, to expand its contents. This region should register a
         * // visibility check function as follows:
         * apex.message.addVisibilityCheck( function( id ) {
         *     var lExpander$ = $( "#" + id ).closest( ".t-Expander" );
         *
         *     // Check if parent element of the element passed is an 'expander' region
         *     if ( lExpander$.hasClass( "t-Expander" ) ) {
         *
         *         // If so, expander region must show its contents
         *         lExpander$.expander( "expand" );
         *     }
         * });
         * @param pFunction - A function that is called with an element ID. The function should ensure that the
         *                              element is visible if the element is managed or controlled by the region type that
         *                              added the function.
         */
        function addVisibilityCheck(pFunction: (...params: any[]) => any): void;
    }
    /**
     * <p>The apex.model namespace contains methods used to manage client side Application Express data models. These models
     * store data for display by UI components. They correspond to the view-model in the Model-View-ViewModel (MVVM) pattern.
     * See {@link model} for details.</p>
     * <p>This namespace contains functions to manage the lifecycle of a model:</p>
     * <ul>
     * <li>Use {@link apex.model.create} to create a model.</li>
     * <li>Use {@link apex.model.list} to list all the existing models.</li>
     * <li>Use {@link apex.model.get} to return an existing model.</li>
     * <li>Use {@link apex.model.release} to release a model once you are done with it.</li>
     * </ul>
     * <p>Models are reference counted so for every call to <code class="prettyprint">get</code> or
     * <code class="prettyprint">create</code> you must call <code class="prettyprint">release</code>. Failure to do so can
     * result in unused models taking up memory. Typically the APEX region associated with the model will manage
     * its life cycle.
     * </p>
     * <p>Models typically act as an intermediary between data persisted on the server and one or more views on the client.
     * The <code class="prettyprint">regionId</code> option associates the model with an APEX region for the purpose of
     * fetching and saving data. Models can be created without a <code class="prettyprint">regionId</code>. These are
     * known as local models and they cannot fetch data from or save data to the server.
     * </p>
     * <p>There are also methods such as {@link apex.model.save}, {@link apex.model.anyChanges}, and {@link apex.model.anyErrors}
     * that operate on multiple models.
     * </p>
     * <div class="hw">
     * <h3 id="master-detail">Master Detail</h3>
     * <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark Master Detail" href="#master-detail"></a>
     * </div>
     * <p>Models can be arranged in a master detail configuration. This is done by providing the
     * <code class="prettyprint">parentModel</code> and <code class="prettyprint">parentRecordId</code>
     * options when creating the detail models. A single master model can have multiple kinds of detail models. For example
     * projects can have tasks and members as details. Each kind of detail model has one or more model instances; each related
     * to a record in the master model. Detail instance models share the same name and field configuration but each
     * has a distinct instance id and different data. A model is uniquely identified by a {@link model.ModelId}, which in the case
     * of a detail model contains the detail name and instance id. Detail models are cached so that data doesn't have to be
     * fetched from the server unnecessarily. The view layer typically shows a view of the detail instance model that is
     * associated with the current record of the master view. As the current record of the master changes the view layer
     * changes the detail model instance the detail view is showing. The view layer will get a cached instance model if
     * there is one and if not will create the instance model. The maximum number of detail instances to cache is controlled
     * with the {@link apex.model.getMaxCachedModels} and {@link apex.model.setMaxCachedModels} functions. It is the least
     * recently used model that is kicked out of the cache. Models that have changes are not destroyed unless
     * {@link apex.model.destroy} is called.</p>
     * <p>A detail model can be a master to its own set of sub-detail models. This relationship can be nested to any depth.</p>
     */
    namespace model {
        /**
         * <p>Create a model with the given identity, options and optionally initial data.
         * When you are done with the model you must call {@link apex.model.release}. Or if you are sure no one else is using it
         * you can call {@link apex.model.destroy}.</p>
         * @example
         * <caption>This example creates a very simple local table shape model called "people" that stores name and age.
         * The records are arrays and the model is given some initial data. The model is editable and the ID field
         * is the record identity.</caption>
         * var fields = {
         *         ID: {
         *             index: 0
         *         },
         *         NAME: {
         *             index: 1
         *         },
         *         AGE: {
         *             index: 2
         *         }
         *     },
         *     data = [
         *         ["00010", "Mark", "32"],
         *         ["00091", "Mary", "27"],
         *         ...
         *     ];
         * apex.model.create("people", {
         *     shape: "table",
         *     recordIsArray: true,
         *     fields: fields,
         *     identityField: "ID",
         *     editable: true,
         *     paginationType: "none"
         * }, data, data.length );
         * @param pModelId - Model identifier. Must be unique for the page. Creating a model with an identifier
         *   that already exists will overwrite the existing model.
         * @param pOptions - Model options. All properties are optional unless specified otherwise.
         * @param pOptions.shape - The shape of data the model holds. One of "table", "tree", or "record". The default is "table".
         * @param pOptions.recordIsArray - If true record fields are stored in an array otherwise the record is an object.
         *   If recordIsArray is true then the field metadata must include the <code class="prettyprint">index</code> property. The default is false.
         * @param pOptions.hasTotalRecords - Only applies if <code class="prettyprint">shape</code> is "table".
         *   If true the sever will always provide the total
         *   number of records. The default is false unless paginationType is "none".
         * @param pOptions.genIdPrefix - A string prefix to use when generating ids for inserted records. The default is "t".
         * @param pOptions.fields - This required option defines the fields of each record.
         *   Each property is the name of a field. The value is a {@link model.FieldMeta} object with metadata about the field that
         *   the model uses.
         * @param pOptions.regionId - Primary region ID that this model is associated with for the purpose of exchanging
         *   data with the APEX server. If there is no regionId then the model cannot use standard requests to fetch or save
         *   data and therefore is just a local model. The default is null.
         * @param pOptions.ajaxIdentifier - The Ajax Identifier used to identify the Ajax call to fetch or save data.
         *   The default is null.
         * @param pOptions.pageItemsToSubmit - An array of page item names to submit when fetching and saving data.
         *   The default is null.
         * @param pOptions.regionData - Additional data to send at the region level for all requests. The default is an empty object.
         * @param pOptions.fetchData - Additional data to send in fetch requests. The default is an empty object.
         * @param pOptions.saveData - Additional data to send in save requests. The default is an empty object.
         * @param pOptions.requestOptions - The properties of this object are included
         *   in the options object of {@link apex.server.plugin} for any ajax requests made by the model.
         * @param pOptions.version - This is the version (could be a hash) of the model definition. The value
         *   is opaque to the model. It is sent in all requests; fetch, save etc. If the server detects that the version is
         *   different than it expects then it returns an error. This is to ensure that the client and server agree on the
         *   general model and field definitions. The default is 1. This option currently has no effect and is reserved
         *   for future use.
         * @param pOptions.parentModel - Model identifier of parent (master) model or null if there is no parent.
         *   The default is null.
         * @param pOptions.parentRecordId - Only applies if parentModel is given. The record id of the record in the
         *   parent model that this model is associated with. Typically this model's ModelId instance and the parentRecordId
         *   are the same. The default is null.
         * @param pOptions.editable - If true the model is editable and false otherwise. The default is false.
         * @param pOptions.onlyMarkForDelete - If false deleted records are removed from the collection.
         *   If true then deleted records are marked as deleted but remain in the collection. The default is true.
         * @param pOptions.identityField - Name of identity field or an array of identity field names if the
         *   records have a multi valued primary key. Required if editable is true. It is a best practice to specify the
         *   identityField even if the model is not editable as it can be useful for pagination, selection, and fetching
         *   additional data. The default is null.
         * @param pOptions.childrenField - This only applies for tree shape models. The name of the field that
         *   contains an array of node children. The default is null.
         * @param pOptions.parentIdentityField - This only applies for tree shape models. The name of parent node
         *   identity field. The default is null.
         * @param pOptions.metaField - The name of meta field. The meta field stores metadata about the record and
         *   possibly record fields The default is null.
         * @param pOptions.check - A function that is called to do additional permission checking.
         * @param pOptions.paginationType - One of "none", "one", "progressive".
         * <ul>
         * <li>none: No paging. The server has given all the data it has (it may be capped but you can't get more)</li>
         * <li>one: The model contains just one page at a time. When it asks the server for a new page it
         *  replaces the previous one.</li>
         * <li>progressive: The model will keep adding to its collection as it gets additional pages from
         *   the server</li>
         * </ul>
         * <p>This only applies to table shape models. The default is "none".</p>
         * @param pOptions.pageSize - This is the number of table rows (records) to fetch from the server.
         *   This only applies to table shape models. The default is 100.
         * @param pOptions.makeLoadingIndicator - function(jQuery[] progressViews, Object[] progressOptions)
         *   This is a function that receives an array of progress views and a corresponding array of progress options and returns
         *   a function suitable for the {@link apex.server.plugin} <code class="prettyprint">loadingIndicator</code> option.
         *   It can also return null to disable showing any loading indicator.
         *   If not specified the default is to show the standard APEX progress spinner centered over any visible view(s)
         *   of the model. A view informs the model about its existence by subscribing to the model and passing in the
         *   <code class="prettyprint">progressView</code> and optional <code class="prettyprint">progressOptions</code>
         *   options. See also the {@link model#subscribe} method and {@link model.Observer}.
         * @param [pData] - Initial data to add to the model. For table shape data it is an array of
         *   {@link model.Record}. For tree shape models it is a {@link model.Node} for the root. For record shape data it
         *   is a single {@link model.Record}. If null or not given there is no initial data.
         * @param [pTotal] - Total number of records in the servers collection. Only applies for table shape models.
         * @param [pMoreData] - If true there is more data available on the server for this model. If false
         *   <code class="prettyprint">pData</code> contains all the data. If omitted or null determine if there is more
         *   data based on <code class="prettyprint">pData</code> and <code class="prettyprint">pTotal</code>.
         *   If <code class="prettyprint">pTotal</code> is not given assume there is more data on server.
         *   Only applies for table shape models and only if <code class="prettyprint">paginationType</code> is not "none".
         * @param [pDataOverflow] - If true there is more than the maximum allowed records for this model.
         *   Only applies for table shape models.
         */
        function create(pModelId: model.ModelId, pOptions: {
            shape: string;
            recordIsArray: boolean;
            hasTotalRecords: boolean;
            genIdPrefix: string;
            fields: {
                [key: string]: model.FieldMeta;
            };
            regionId: string;
            ajaxIdentifier: string;
            pageItemsToSubmit: string[];
            regionData: any;
            fetchData: any;
            saveData: any;
            requestOptions: any;
            version: number | string;
            parentModel: model.ModelId;
            parentRecordId: string;
            editable: boolean;
            onlyMarkForDelete: boolean;
            identityField: string | string[];
            childrenField: string;
            parentIdentityField: string;
            metaField: string;
            check: model.CheckCallback;
            paginationType: string;
            pageSize: number;
            makeLoadingIndicator: (...params: any[]) => any;
        }, pData?: any[] | any, pTotal?: number, pMoreData?: boolean, pDataOverflow?: boolean): model;
        /**
         * <p>Returns an array of all the currently defined model identifiers in no particular order.
         * If <code class="prettyprint">pModelId</code> is null or not provided all models are listed.
         * If <code class="prettyprint">pModelId</code> contains just a model name then just that model if any and all
         * instances with the same model name if any are returned.
         * If <code class="prettyprint">pModelId</code> contains a model and an instance then just that model instance is included.
         * Specifying <code class="prettyprint">pModelId</code> is most useful when <code class="prettyprint">pIncludeRelated</code> is true.
         * @param [pIncludeLocal] - If true models that don't have a regionId will be included.
         * @param [pModelId] - Model identifier as given in call to {@link apex.model.create} or just a model name.
         * @param [pIncludeRelated] - If true then any dependents of any listed models are included.
         * @returns Array of model identifiers
         */
        function list(pIncludeLocal?: boolean, pModelId?: model.ModelId, pIncludeRelated?: boolean): model.ModelId[];
        /**
         * Returns true if any of the specified models have changes.
         * @example
         * <caption>This example displays an alert message if any (non-local) models on the page have unsaved changes.</caption>
         * if ( apex.model.anyChanges() ) {
         *     apex.message.alert("Save Changes");
         * }
         * @param [pIncludeLocal] - If true models that don't have a <code class="prettyprint">regionId</code>
         *   will be included in the check for changes.
         * @param [pModelId] - Model identifier as given in call to {@link apex.model.create} or just a model name.
         *  See {@link apex.model.list} for how this parameter is used to select which models to operate on.
         * @param [pIncludeRelated] - If true then any dependents of any selected models are included in check
         * @returns true if any of the specified models have changed.
         */
        function anyChanges(pIncludeLocal?: boolean, pModelId?: model.ModelId, pIncludeRelated?: boolean): boolean;
        /**
         * Returns true if any of the specified models have errors.
         * @example
         * <caption>This example displays an alert message if any (non-local) models on the page have errors.</caption>
         * if ( apex.model.anyErrors() ) {
         *     apex.message.alert("Fix Errors");
         * }
         * @param [pIncludeLocal] - If true models that don't have a <code class="prettyprint">regionId</code>
         *   will be included in check for errors.
         * @param [pModelId] - Model identifier as given in call to {@link apex.model.create} or just a model name.
         *  See {@link apex.model.list} for how this parameter is used to select which models to operate on.
         * @param [pIncludeRelated] - If true then any dependents of any selected models are included in check.
         * @returns true if any of the specified models have errors.
         */
        function anyErrors(pIncludeLocal?: boolean, pModelId?: model.ModelId, pIncludeRelated?: boolean): boolean;
        /**
         * <p>Low level function to add changes for any of the specified models to a request.
         * Changes are added to the provided request data. This doesn't actually send the request to the server.
         * In most cases {@link apex.model.save} should be used rather than this function.</p>
         * @param pRequestData - An initial request object that will have all changes for the specified models added to it.
         * @param [pModelId] - Model identifier as given in call to {@link apex.model.create} or just a model name.
         *  See {@link apex.model.list} for how this parameter is used to select which models to operate on.
         * @param [pIncludeRelated] - If true then any dependents of any selected models are included if they have changes.
         * @returns A function that must be called with the promise returned from the save request.
         */
        function addChangesToSaveRequest(pRequestData: any, pModelId?: model.ModelId, pIncludeRelated?: boolean): (...params: any[]) => any;
        /**
         * <p>Save any of the specified models that have changes. This consolidates all the model data to save into a single
         * request.</p>
         * @example
         * <caption>This example saves all the models on the page that have changes.</caption>
         * apex.model.save();
         * @param [pRequestData] - An initial request object that will have all changes for the specified models added to it.
         * @param [pOptions] - Options to pass on to {@link apex.server.plugin} API.
         * @param [pModelId] - Model identifier as given in call to {@link apex.model.create} or just a model name.
         * @param [pIncludeRelated] - If true then any dependents of any selected models are included in check.
         * @returns The promise from {@link apex.server.plugin} if a save request is sent or null if there are no
         * changed models to save.
         */
        function save(pRequestData?: any, pOptions?: any, pModelId?: model.ModelId, pIncludeRelated?: boolean): promise;
        /**
         * Get a model by its model identifier.
         * @example
         * <caption>Get access to a model with model id MyModel and release it when done.</caption>
         * var myModel = apex.model.get("MyModel");
         * // ... do something with myModel
         * apex.model.release("MyModel");  // release it when done
         * @param pModelId - Model identifier as given in call to {@link apex.model.create}.
         * @returns The model identified by pModelId.
         */
        function get(pModelId: model.ModelId): model;
        /**
         * <p>Release a model if it is not being used but may be used again in the future. This allows the model
         * to be destroyed if needed to conserve memory.</p>
         * <p>Models are reference counted. For every call to get or create a call to release with the same model id is
         * required. When the reference count is zero the model is destroyed unless it is changed or if it has a
         * parent model, in which case it is cached.</p>
         * @example
         * <caption>Get access to a model with model id MyModel and release it when done.</caption>
         * var myModel = apex.model.get("MyModel");
         * // ... do something with myModel
         * apex.model.release("MyModel");  // release it when done
         * @param pModelId - Model identifier as given in call to {@link apex.model.create}.
         */
        function release(pModelId: model.ModelId): void;
        /**
         * <p>Destroy and remove a model by its identifier. This bypasses reference counting and caching. This method should
         * not be used unless you are sure that no one else is using the model.</p>
         * <p>If <code class="prettyprint">pModelId</code> is a string model name and there are one or more instances
         * they will all be destroyed.</p>
         * @example
         * <caption>Destroy the model with model id MyModel.</caption>
         * apex.model.destroy("MyModel");
         * @param pModelId - Model identifier as given in call to {@link apex.model.create} or just a model name.
         */
        function destroy(pModelId: model.ModelId): void;
        /**
         * Get the max number of cached detail instance models.
         * @returns Max cached detail instance models.
         */
        function getMaxCachedModels(): number;
        /**
         * Set the max number of cached unreferenced, unchanged detail instance models that will be kept.
         * @param n - Number of unreferenced, unchanged detail instance models that will be kept.
         */
        function setMaxCachedModels(n: number): void;
    }
    /**
     * This namespace contains functions related to dialog, popup, and redirect functionality of Oracle Application Express.
     */
    namespace navigation {
        /**
         * <p>Opens the specified page (pWhere) in the current window.</p>
         * @example
         * <caption>This example demonstrates a call to redirect to page 3 within the current application,
         * in the current session, with debugging set to <code class="prettyprint">NO</code> and
         * setting <code class="prettyprint">RP</code> to reset pagination for an Interactive Report on page 3.
         * The substitution string, <code class="prettyprint">APP_SESSION</code> is substituted on the server with the current session ID.</caption>
         * apex.navigation.redirect ( "f?p=&APP_ID.:3:&APP_SESSION.::NO:RP::" );
         * @example
         * <caption>This example demonstrates a very simple call to redirect to page 1 in application ID 102, in the current session.
         * The substitution string, <code class="prettyprint">APP_SESSION</code> is substituted on the server with the current session ID.</caption>
         * apex.navigation.redirect ( "f?p=102:1:&APP_SESSION.:::::" );
         * @example
         * <caption>This example demonstrates a call to redirect to page 3 within the current application, <code class="prettyprint">$v( "pFlowId" )</code>
         * in the current session, <code class="prettyprint">$v("pInstance")</code>, which is processed on the client.
         * This example demonstrates calling this function from within a JavaScript file.</caption>
         * apex.navigation.redirect( "f?p=" + $v( "pFlowId" ) + ":3:" + $v( "pInstance" ) );
         * @example
         * <caption>This example demonstrates a call to redirect to a URL defined in a page item, <code class="prettyprint">P1_URL"</code>.</caption>
         * apex.navigation.redirect( apex.item("P1_URL").getValue() );
         * @param pWhere - The URL of the page to open.
         */
        function redirect(pWhere: string): void;
        /**
         * <p>This namespace contains functions related to a popup window opened with {@link apex.navigation.popup}.</p>
         */
        namespace popup {
            /**
             * <p>Sets the value of the item in the parent window (pItem) with (pValue), and then closes the popup window.
             * This function should only be called from an Oracle Application Express page that has been opened as a popup window,
             * via a call to {@link apex.navigation.popup}, where the call to {@link apex.navigation.popup}
             * is originating from another Oracle Application Express page.</p>
             * @example
             * <caption>This example demonstrates a call to close a popup window,
             * setting the page item P3_STATUS to the string "Action Processed".</caption>
             *
             * apex.navigation.popup.close ( "P3_STATUS", "Action Processed." );
             * @param pItem - The DOM Element or string id (item name) of the page item to be set with the value of <code class="prettyprint">pValue</code>.
             * @param pValue - The value to be save to the page item referenced in <code class="prettyprint">pItem</code>.
             */
            function close(pItem: Element | string, pValue: string): void;
        }
        /**
         * <p>This namespace contains functions related to a popup window opened with {@link apex.navigation.popup}.</p>
         */
        namespace popup {
            /**
             * <p>Sets the value of the item in the parent window (pItem) with (pValue), and then closes the popup window.
             * This function should only be called from an Oracle Application Express page that has been opened as a popup window,
             * via a call to {@link apex.navigation.popup}, where the call to {@link apex.navigation.popup}
             * is originating from another Oracle Application Express page.</p>
             * @example
             * <caption>This example demonstrates a call to close a popup window,
             * setting the page item P3_STATUS to the string "Action Processed".</caption>
             *
             * apex.navigation.popup.close ( "P3_STATUS", "Action Processed." );
             * @param pItem - The DOM Element or string id (item name) of the page item to be set with the value of <code class="prettyprint">pValue</code>.
             * @param pValue - The value to be save to the page item referenced in <code class="prettyprint">pItem</code>.
             */
            function close(pItem: Element | string, pValue: string): void;
        }
        /**
         * <p>Opens the given URL in a new named window or tab (the browser / browser user preference settings may control
         * if a window or tab is used). If a window with that name already exists it is reused. The names "_self", "_parent"
         * and "_top" should not be used. The window name is made unique so that it cannot be shared with other apps.
         * Every effort is made to then focus the new window.</p>
         *
         * <p>Unlike a popup, the new window is intended to be fully functional. This is intended to be as close
         * as you can get to a normal anchor with a target (<code class="prettyprint">&lt;a target="name" href="..."&gt;</code>)
         * behavior from JavaScript but with the feature of focusing the window in all browsers by default.</p>
         *
         * <p>If option <code class="prettyprint">favorTabbedBrowsing</code> is true:
         * For IE, Edge, and Firefox, the user may need to manually focus the
         * tab (assuming the browser is configured to open pages in tabs).</p>
         *
         * <p>If option <code class="prettyprint">favorTabbedBrowsing</code> is not true (the default):
         * For IE and Firefox, the page will be opened in a new browser window
         * (unless explicitly overridden by a browser setting). But it will very likely be able to focus
         * the new page.</p>
         *
         * <p>Once the named window is open the <code class="prettyprint">favorTabbedBrowsing</code> setting doesn't apply to that window.</p>
         *
         * <p class="important">Note: Firefox, Edge, and IE will not focus a tab if that tab isn't the currently active tab in its browser window.</p>
         *
         * <p class="important">Note: For Opera the Advanced/content > JavaScript  Options: “Allow raising of windows” must be checked in order for
         * focus to work.</p>
         *
         * <p class="important">Note: To avoid being suppressed by a popup blocker call this from a click event handler on a link or button.</p>
         * @example
         * <caption>This example opens the URL in variable <code class="prettyprint">url</code> in a new window.
         * The new window can be accessed from variable <code class="prettyprint">myWindow</code>.</caption>
         * var myWindow = apex.navigation.openInNewWindow( url, "MyWindow" );
         * @param pURL - The URL of the page to load.
         * @param [pWindowName] - The name of the window. The default is "_blank".
         * @param [pOptions] - Options object with these properties:
         * @param [pOptions.altSuffix] - An Alternative suffix to append to <code class="prettyprint">pWindowName</code> to make it unique.
         * @param [pOptions.favorTabbedBrowsing] - If true, don't try to force a new window for the benefit of being able to focus it.
         * @param [pOptions.noopener] - If true the new opened window does not have access to this window via its
         *   <code class="prettyprint">window.opener</code> property.
         *   The default is true if the new window name is "_blank" and false otherwise.
         * @returns The window object of named window or null if window was not opened. Note that if
         *   option <code class="prettyprint">noopener</code> is true then the return value is always null.
         */
        function openInNewWindow(pURL: string, pWindowName?: string, pOptions?: {
            altSuffix?: string;
            favorTabbedBrowsing?: boolean;
            noopener?: boolean;
        }): any | null;
        /**
         * <p>This namespace contains functions related to a dialog opened with {@link apex.navigation.dialog}.
         * All of the functions in the {@link apex.navigation.dialog} namespace need to be run in the context of the specified dialog page.</p>
         */
        namespace dialog {
            /**
             * <p>Executes an action and then closes the dialog window.</p>
             * @example
             * <caption>This example demonstrates chaining from one modal dialog page to another, where the <code class="prettyprint">pAction</code> parameter is
             * a function that redirects to a different modal dialog page, specified in the URL:</caption>
             * apex.navigation.dialog.close( true, function( pDialog ) {
             *     apex.navigation.dialog(
             *         url,
             *         {
             *             title: "About",
             *             height: "480",
             *             width: "800",
             *             maxWidth: "1200",
             *             modal: true,
             *             dialog: pDialog,
             *             resizable: false
             *         },
             *         "a-Dialog--uiDialog",
             *         $( "#mybutton_static_id" ) );
             * } );
             * @example
             * <caption>This example demonstrates closing a modal dialog page, and returning an array of page items,
             * <code class="prettyprint">P3_EMPNO</code> and <code class="prettyprint">P3_ENAME</code>.  The values from the page items can then be used by the
             * page that launched the modal dialog, via a <code class="prettyprint">Dialog Closed</code> Dynamic Action event.</caption>
             * apex.navigation.dialog.close( true, ["P3_EMPNO","P3_ENAME"] );
             * @example
             * <caption>This example demonstrates closing a modal dialog page, and returning an object of page item,
             * <code class="prettyprint">dialogPageId</code> and its value of <code class="prettyprint">3</code>.  The returned value can be used by the
             * page that launched the modal dialog, via a <code class="prettyprint">Dialog Closed</code> Dynamic Action event, to identify the
             * page ID of the modal dialog that triggered the event.</caption>
             * apex.navigation.dialog.close( true, { dialogPageId: 3 } );
             * @param pIsModal - If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal.
             * @param [pAction] - The action can be one of the following:
             *    <ul>
             *        <li>a URL which will trigger a redirect in the parent page</li>
             *        <li>a function to redirect to a different dialog page</li>
             *        <li>false to cancel the dialog</li>
             *        <li>an object of page items and values which will be exposed in the apexafterclosedialog event</li>
             *        <li>an array of page item names, the values will be gathered from the page items to create
             *         an object of page item values to be exposed in the apexafterclosedialog event</li>
             *    </ul>
             */
            function close(pIsModal: boolean, pAction?: string | ((...params: any[]) => any) | any): void;
            /**
             * <p>Closes the dialog window.</p>
             * @example
             * <caption>This example demonstrates closing a modal dialog page</caption>
             * apex.navigation.dialog.cancel( true );
             * @param pIsModal - If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal.
             */
            function cancel(pIsModal: boolean): void;
            /**
             * <p>Registers the internal "close" event of a dialog. The event will be triggered by fireCloseEvent and depending on
             * the passed in <code class="prettyprint">pAction</code> will:</p>
             *
             * <ul>
             *     <li>Re-use the existing dialog and navigate to a different dialog page</li>
             *     <li>Navigate to a different page in the caller</li>
             *     <li>Cancel the dialog</li>
             *     <li>Close the dialog and trigger the "apexafterclosedialog" event</li>
             * </ul>
             * @example
             * <caption>This example demonstrates a call to open the url in a named popup window, "Information".
             * The new window can be accessed from variable <code class="prettyprint">myPopupWindow</code>.
             * Some additional parameters are also set in the call, to control scrolling, resizing and the visibility of a toolbar.
             * The variable <code class="prettyprint">myTriggeringElement</code> is used to define the triggering element of the popup,
             * a button named <code class="prettyprint">myButton</code>. Using a call to {@link apex.navigation.dialog.registerCloseHandler},
             * a new handler can be defined, to associate the close action of the dialog with the button.</caption>
             *
             * var myTriggeringElement,
             *     myPopupWindow;
             *
             * myTriggeringElement = apex.jQuery( '#myButton' );
             *
             * myPopupWindow = apex.navigation.popup ( {
             *     url:       "f?p=102:2:&APP_SESSION.:::2::",
             *     name:      "Information",
             *     scroll:    "no",
             *     resizable: "no",
             *     toolbar:   "yes"
             * } );
             *
             * navigation.dialog.registerCloseHandler( {
             *     handler$:           myTriggeringElement,
             *     dialog:             myPopupWindow,
             *     triggeringElement$: myTriggeringElement,
             *     closeFunction:      function() {
             *         myPopupWindow.close();
             *     }
             * });
             * @param pOptions - Has to contain the following attributes:
             * @param [pOptions.handler$] - jQuery object where the event will be registered for.
             * @param [pOptions.dialog] - DOM Element/jQuery/... object of the current dialog instance which will be passed into the open dialog call if the existing dialog should be re-used.
             * @param [pOptions.closeFunction] - Function which is used to close the dialog.
             */
            function registerCloseHandler(pOptions: {
                handler$?: any;
                dialog?: Element | any;
                closeFunction?: (...params: any[]) => any;
            }): void;
            /**
             * <p>Fires the internal "close" event of a dialog which was registered with the registerCloseHandler when the dialog
             * was opened.</p>
             * @example
             * <caption>This example demonstrates a call to close a dialog page, returning an array of page items from the dialog page.
             * The variable <code class="prettyprint">myTriggeringElement</code> is used
             * to define the triggering element of the dialog, a button named <code class="prettyprint">myButton</code>.
             * The page items <code class="prettyprint">P3_EMPNO</code> and
             * <code class="prettyprint">P3_ENAME</code> are returned to the launching page. The values from the page items can then be used by the
             * page that launched the modal dialog, via a <code class="prettyprint">Dialog Closed</code> Dynamic Action event.</caption>
             *
             * var myTriggeringElement;
             * myTriggeringElement = apex.jQuery( '#myButton' );
             *
             * navigation.dialog.fureCloseHandler( myTriggeringElement, ["P3_EMPNO”,”P3_ENAME”] );
             * @param pHandler$ - A jQuery object which has been used in the call to registerCloseHandler.
             * @param pAction - The value which is passed into the navigation.dialog.close function.
             */
            function fireCloseHandler(pHandler$: jQuery, pAction: any): void;
        }
        /**
         * <p>This namespace contains functions related to a dialog opened with {@link apex.navigation.dialog}.
         * All of the functions in the {@link apex.navigation.dialog} namespace need to be run in the context of the specified dialog page.</p>
         */
        namespace dialog {
            /**
             * <p>Executes an action and then closes the dialog window.</p>
             * @example
             * <caption>This example demonstrates chaining from one modal dialog page to another, where the <code class="prettyprint">pAction</code> parameter is
             * a function that redirects to a different modal dialog page, specified in the URL:</caption>
             * apex.navigation.dialog.close( true, function( pDialog ) {
             *     apex.navigation.dialog(
             *         url,
             *         {
             *             title: "About",
             *             height: "480",
             *             width: "800",
             *             maxWidth: "1200",
             *             modal: true,
             *             dialog: pDialog,
             *             resizable: false
             *         },
             *         "a-Dialog--uiDialog",
             *         $( "#mybutton_static_id" ) );
             * } );
             * @example
             * <caption>This example demonstrates closing a modal dialog page, and returning an array of page items,
             * <code class="prettyprint">P3_EMPNO</code> and <code class="prettyprint">P3_ENAME</code>.  The values from the page items can then be used by the
             * page that launched the modal dialog, via a <code class="prettyprint">Dialog Closed</code> Dynamic Action event.</caption>
             * apex.navigation.dialog.close( true, ["P3_EMPNO","P3_ENAME"] );
             * @example
             * <caption>This example demonstrates closing a modal dialog page, and returning an object of page item,
             * <code class="prettyprint">dialogPageId</code> and its value of <code class="prettyprint">3</code>.  The returned value can be used by the
             * page that launched the modal dialog, via a <code class="prettyprint">Dialog Closed</code> Dynamic Action event, to identify the
             * page ID of the modal dialog that triggered the event.</caption>
             * apex.navigation.dialog.close( true, { dialogPageId: 3 } );
             * @param pIsModal - If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal.
             * @param [pAction] - The action can be one of the following:
             *    <ul>
             *        <li>a URL which will trigger a redirect in the parent page</li>
             *        <li>a function to redirect to a different dialog page</li>
             *        <li>false to cancel the dialog</li>
             *        <li>an object of page items and values which will be exposed in the apexafterclosedialog event</li>
             *        <li>an array of page item names, the values will be gathered from the page items to create
             *         an object of page item values to be exposed in the apexafterclosedialog event</li>
             *    </ul>
             */
            function close(pIsModal: boolean, pAction?: string | ((...params: any[]) => any) | any): void;
            /**
             * <p>Closes the dialog window.</p>
             * @example
             * <caption>This example demonstrates closing a modal dialog page</caption>
             * apex.navigation.dialog.cancel( true );
             * @param pIsModal - If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal.
             */
            function cancel(pIsModal: boolean): void;
            /**
             * <p>Registers the internal "close" event of a dialog. The event will be triggered by fireCloseEvent and depending on
             * the passed in <code class="prettyprint">pAction</code> will:</p>
             *
             * <ul>
             *     <li>Re-use the existing dialog and navigate to a different dialog page</li>
             *     <li>Navigate to a different page in the caller</li>
             *     <li>Cancel the dialog</li>
             *     <li>Close the dialog and trigger the "apexafterclosedialog" event</li>
             * </ul>
             * @example
             * <caption>This example demonstrates a call to open the url in a named popup window, "Information".
             * The new window can be accessed from variable <code class="prettyprint">myPopupWindow</code>.
             * Some additional parameters are also set in the call, to control scrolling, resizing and the visibility of a toolbar.
             * The variable <code class="prettyprint">myTriggeringElement</code> is used to define the triggering element of the popup,
             * a button named <code class="prettyprint">myButton</code>. Using a call to {@link apex.navigation.dialog.registerCloseHandler},
             * a new handler can be defined, to associate the close action of the dialog with the button.</caption>
             *
             * var myTriggeringElement,
             *     myPopupWindow;
             *
             * myTriggeringElement = apex.jQuery( '#myButton' );
             *
             * myPopupWindow = apex.navigation.popup ( {
             *     url:       "f?p=102:2:&APP_SESSION.:::2::",
             *     name:      "Information",
             *     scroll:    "no",
             *     resizable: "no",
             *     toolbar:   "yes"
             * } );
             *
             * navigation.dialog.registerCloseHandler( {
             *     handler$:           myTriggeringElement,
             *     dialog:             myPopupWindow,
             *     triggeringElement$: myTriggeringElement,
             *     closeFunction:      function() {
             *         myPopupWindow.close();
             *     }
             * });
             * @param pOptions - Has to contain the following attributes:
             * @param [pOptions.handler$] - jQuery object where the event will be registered for.
             * @param [pOptions.dialog] - DOM Element/jQuery/... object of the current dialog instance which will be passed into the open dialog call if the existing dialog should be re-used.
             * @param [pOptions.closeFunction] - Function which is used to close the dialog.
             */
            function registerCloseHandler(pOptions: {
                handler$?: any;
                dialog?: Element | any;
                closeFunction?: (...params: any[]) => any;
            }): void;
            /**
             * <p>Fires the internal "close" event of a dialog which was registered with the registerCloseHandler when the dialog
             * was opened.</p>
             * @example
             * <caption>This example demonstrates a call to close a dialog page, returning an array of page items from the dialog page.
             * The variable <code class="prettyprint">myTriggeringElement</code> is used
             * to define the triggering element of the dialog, a button named <code class="prettyprint">myButton</code>.
             * The page items <code class="prettyprint">P3_EMPNO</code> and
             * <code class="prettyprint">P3_ENAME</code> are returned to the launching page. The values from the page items can then be used by the
             * page that launched the modal dialog, via a <code class="prettyprint">Dialog Closed</code> Dynamic Action event.</caption>
             *
             * var myTriggeringElement;
             * myTriggeringElement = apex.jQuery( '#myButton' );
             *
             * navigation.dialog.fureCloseHandler( myTriggeringElement, ["P3_EMPNO”,”P3_ENAME”] );
             * @param pHandler$ - A jQuery object which has been used in the call to registerCloseHandler.
             * @param pAction - The value which is passed into the navigation.dialog.close function.
             */
            function fireCloseHandler(pHandler$: jQuery, pAction: any): void;
        }
    }
    /**
     * <p>This namespace is used for all client-side page related functions of Oracle Application Express.</p>
     */
    namespace page {
        /**
         * <p>This function submits the page. The shorter alias for this function {@link apex.submit} with the same parameters
         * can also be used. Depending on the value of the page's Reload on Submit attribute, the page is submitted using
         * Ajax or with a normal form submission post request.</p>
         *
         * <p>This function triggers a {@link apex.event:apexbeforepagesubmit} event on the {@link apex.gPageContext$} which can be canceled
         * by an event handler. If canceled, the page is not submitted. Just before the page is submitted, this function
         * triggers a {@link apex.event:apexpagesubmit} event on the {@link apex.gPageContext$}, which cannot be canceled.</p>
         * @example
         * <caption>Submits the current page with a REQUEST value of 'DELETE'.</caption>
         * apex.page.submit( "DELETE" );
         * @example
         * <caption>This example is the same as the previous one but uses the shorter alias.</caption>
         * apex.submit( "DELETE" );
         * @example
         * <caption>This example submits the page with a REQUEST value of 'DELETE' and two page item values are set,
         *   P1_DEPTNO to 10 and P1_EMPNO to 5433 . During submit, a wait icon is displayed as a visual indicator for the user.</caption>
         * apex.page.submit( {
         *     request: "DELETE",
         *     set: {
         *        "P1_DEPTNO": 10,
         *        "P1_EMPNO": 5433
         *     },
         *     showWait: true,
         * } );
         * @example
         * <caption>This example is the same as the previous one but uses the shorter alias.</caption>
         * apex.submit( {
         *     request: "DELETE",
         *     set: {
         *        "P1_DEPTNO": 10,
         *        "P1_EMPNO": 5433
         *     },
         *     showWait: true,
         * } );
         * @example
         * <caption>This example shows how to submit the page when the ENTER key is pressed on a text input.</caption>
         * apex.jQuery("#P1_TEXT").on( "keydown", function( event ) {
         *   apex.page.submit({
         *       submitIfEnter: event
         *   });
         * });
         * @param [pOptions] - If this is a string, it will be used to set the REQUEST value.
         *   If this is null, the page will be submitted with no REQUEST value.
         *   If this is an object, you can define the following properties:
         * @param [pOptions.request] - The REQUEST value. For a submit function the default is null.
         * @param [pOptions.set] - An object containing name/value pairs of items to set on the page prior to submission.
         *   The object properties are page item names and the item value is set to the property value.
         *   The default is to not set any page items.
         * @param [pOptions.showWait] - If true, a 'Wait Indicator' spinner is displayed, which can be useful when
         *   running long page operations. The wait indicator is created using {@link apex.widget.waitPopup}.
         *   The default is false. Note: When the page is submitted with ajax (controlled with
         *   the page attribute Reload on Submit = Only for Success) a progress spinner may still be shown as part of
         *   the ajax request even if showWait is false.
         * @param [pOptions.submitIfEnter] - If you only want to submit when the ENTER key has been pressed,
         *   call apex.page.submit in the keydown or keypress event handler and pass the event object in this parameter.
         * @param [pOptions.reloadOnSubmit] - Override the reload on submit setting of the page.
         *   Set to one of the following: "A" (always) or "S" (success)
         * @param [pOptions.ignoreChange] - If true (the default) and the warnOnUnsavedChanges feature is enabled, no
         *   warning will be given if there are changes. If false and the warnOnUnsavedChanges feature is enabled and there
         *   are changes there will be a warning. If warnOnUnsavedChanges feature is disabled there is never a warning.
         *   Set this to false if the submit will not actually save the data.
         * @param [pOptions.validate] - If true, check the validity of page items and models before submitting the page.
         *   If anything is not valid then show an alert dialog and don't submit the page. The default is false.
         * @returns If the submitIfEnter option is specified, a Boolean value is returned.
         *   If the ENTER key is not pressed, true is returned and if the ENTER key is pressed, false is returned.
         *   If submitIfEnter is not specified, undefined is returned.
         */
        function submit(pOptions?: {
            request?: string;
            set?: any;
            showWait?: boolean;
            submitIfEnter?: Event;
            reloadOnSubmit?: string;
            ignoreChange?: boolean;
            validate?: boolean;
        }): boolean | undefined;
        /**
         * <p>Displays a confirmation dialog showing a message, pMessage, and depending on the user's choice, submits the page or
         * cancels submitting. Depending on the value of the page's Reload on Submit attribute, the page is submitted using
         * Ajax or with a normal form submission post request.</p>
         *
         * <p>Once the user chooses to submit the page, the behavior is the same as for the {@link apex.page.submit} function.
         * The shorter alias for this function {@link apex.confirm} with the same parameters can also be used.</p>
         * @example
         * <caption>Shows a confirmation dialog with the text 'Delete Department'.
         *   If the user chooses to proceed with the delete, the current page
         *   is submitted with a REQUEST value of 'DELETE'.</caption>
         * apex.page.confirm( "Delete Department", 'DELETE' );
         * @example
         * <caption>This example is the same as the previous one but uses the shorter alias.</caption>
         * apex.confirm( "Delete Department", 'DELETE' );
         * @example
         * <caption>This example shows a confirmation message with the 'Save Department?' text.
         *   If the user chooses to proceed with the save, the page is submitted with a REQUEST value of 'SAVE' and 2 page
         *   item values are set, P1_DEPTNO to 10 and P1_EMPNO to 5433.</caption>
         * apex.page.confirm( "Save Department?", {
         *     request: "SAVE",
         *     set: {
         *         "P1_DEPTNO": 10,
         *         "P1_EMPNO": 5433
         *     }
         * } );
         * @example
         * <caption>This example is the same as the previous one but uses the shorter alias.</caption>
         * apex.confirm( "Save Department?", {
         *     request: "SAVE",
         *     set: {
         *         "P1_DEPTNO": 10,
         *         "P1_EMPNO": 5433
         *     }
         * } );
         * @param [pMessage] - The confirmation message to display. The default is
         *   "Would you like to perform this delete action?". It is best to supply your own message because the default
         *   message is not localized.
         *   <p class="important">Note: The default message is deprecated. In the future this argument will be required.</p>
         * @param [pOptions] - If this is a string, it will be used to set the REQUEST value.
         *   If this is null or omitted, the page will be submitted with no REQUEST value.
         *   If this is an object, you can define the following properties:
         * @param [pOptions.request] - The REQUEST value. For the confirm function the default is “Delete”.
         * @param [pOptions.set] - An object containing name/value pairs of items to set on the page prior to submission.
         *   The object properties are page item names and the item value is set to the property value.
         *   The default is to not set any page items.
         * @param [pOptions.showWait] - If true, a 'Wait Indicator' spinner is displayed, which can be useful when
         *   running long page operations. The default is false.
         * @param [pOptions.submitIfEnter] - This option is not useful for the confirm function.
         * @param [pOptions.reloadOnSubmit] - Override the reload on submit setting of the page.
         *   Set to one of the following: "A" (always) or "S" (success)
         * @param [pOptions.ignoreChange] - If true (the default) and the warnOnUnsavedChanges feature is enabled, no
         *   warning will be given if there are changes. If false and the warnOnUnsavedChanges feature is enabled and there
         *   are changes, a warning will be given. If warnOnUnsavedChanges feature is disabled, there is never a warning.
         *   Set this to false if the submit will not actually save the data.
         * @param [pOptions.validate] - If true, check the validity of page items and models before submitting the page.
         *   If anything is not valid then show an alert dialog and don't submit the page. The default is false.
         */
        function confirm(pMessage?: string, pOptions?: {
            request?: string;
            set?: any;
            showWait?: boolean;
            submitIfEnter?: Event;
            reloadOnSubmit?: string;
            ignoreChange?: boolean;
            validate?: boolean;
        }): void;
        /**
         * <p>Check if any page items or submittable Application Express {@link models} on the page are invalid.
         * Any errors are shown inline using the {@link apex.message.showErrors} function.</p>
         *
         * <p class="important">Note: This function does not actually perform any validation. Use HTML 5 validation attributes
         * or API to validate items.</p>
         * @example
         * <caption>The following example checks if the page is valid when a button with id checkButton is pressed.</caption>
         * apex.jQuery( "#checkButton" ).click( function() {
         *     if ( !apex.page.validate() ) {
         *         alert("Please correct errors");
         *     }
         * } );
         * @returns true if page is valid, otherwise false.
         */
        function validate(): boolean;
        /**
         * <p>Return true if any page items or Application Express models on this page have changed since last being
         * sent to the server. Items that are disabled or are configured to ignore changes are not included in the check.
         * This will call the <code class="prettyprint">pExtraIsChanged</code> function set in
         * {@link apex.page.warnOnUnsavedChanges} if one was supplied and only if no other changes are found first.</p>
         * @example
         * <caption>The following example checks if the page is changed before performing some action.</caption>
         * if ( apex.page.isChanged() ) {
         *     // do something when the page has changed
         * }
         * @returns true if there are any changes, otherwise false.
         */
        function isChanged(): boolean;
        /**
         * <p>Initialize a handler that checks for unsaved changes anytime the page is about to unload.
         * This is safe to call multiple times. The pMessage and pExtraIsChanged parameters override any previous values.
         * This function is called automatically when the page attribute Warn on Unsaved Changes is set to yes.
         * The main reason to call this manually is to customize the parameters.</p>
         * <p>See also {@link item#isChanged}.</p>
         * @example
         * <caption>The following example enables the 'Warn on unsaved changes' feature with a custom message.</caption>
         * apex.page.warnOnUnsavedChanges( "The employee record has been changed" );
         * @param [pMessage] - Message to display when there are unsaved changes. If the message is not given,
         *   a default message is used. <p class="important">Note: Most browsers do not show this message.</p>
         * @param [pExtraIsChanged] - Optional additional function to be called, checking if there are any unsaved changes.
         *   It should return true if there are unsaved changes, and false otherwise.
         *   It is only called if there are no changes to any models or page items.
         *   This is useful if there are non-standard state-full inputs on the page that are not Application Express items
         *   and do not keep their state in an Application Express model. It allows writing a custom function to detect
         *   if those non-standard inputs have changed.
         */
        function warnOnUnsavedChanges(pMessage?: string, pExtraIsChanged?: (...params: any[]) => any): void;
        /**
         * <p>Call to remove the handler that checks for unsaved changes. This is useful to do before any kind of cancel
         * operation where the user is intentionally choosing to lose the changes. It is not normally necessary to call
         * this function because the declarative attribute Warn on Unsaved Changes with value Do Not Check will do it
         * automatically. Adding the class <code class="prettyprint">js-ignoreChange</code> to a link (anchor element)
         * or button will cause this function to be called before the link or button action.</p>
         * @example
         * <caption>The following sets up a handler on a custom cancel button, to leave the page without
         *   checking for changes.</caption>
         * apex.jQuery( "#custom-cancel-button" ).click( function() {
         *     apex.page.cancelWarnOnUnsavedChanges();
         *     apex.navigation.redirect( someUrl );
         * } );
         */
        function cancelWarnOnUnsavedChanges(): void;
    }
    /**
     * This function is an alias for {@link apex.page.submit}.
     */
    function submit(): void;
    /**
     * This function is an alias for {@link apex.page.confirm}.
     */
    function confirm(): void;
    /**
     * <p>The apex.region namespace contains global functions related to Oracle Application Express regions.
     * The {@link apex.region} function provides access to a {@link region} interface for a specific region.</p>
     */
    namespace region {
        /**
         * <p>This function is only used by region plug-in developers. It provides a plug-in specific implementation for the region.</p>
         *
         * <p>Use this function to give a region plug-in a set of behaviors defined by <code class="prettyprint">pRegionImpl</code>.
         * The <code class="prettyprint">pRegionImpl</code> parameter can provide its own implementation for standard
         * methods (such as refresh, focus, widget) or omit them to get the default implementation. It can add its own methods as well.
         * It should include a <code class="prettyprint">type</code> string property that specifies the type of region. If the region is implemented
         * with a jQuery UI style widget (using widget factory) then it should provide an implementation for the
         * {@link region#widget} method and define the {@link region#widgetName} property so that the
         * {@link region#call} method works.</p>
         * @example
         * <caption>The following is region initialization code for a hypothetical region plug-in:</caption>
         * function initFancyList( pRegionId, ... ) {
         *     ...
         *     apex.region.create( pRegionId, {
         *         type: "FancyList",
         *         focus: function() {
         *             // code to focus region
         *         },
         *         refresh: function() {
         *             // code to refresh region
         *         }
         *     });
         * }
         * @param pRegionId - Region id or region static id. It is a best practice to give a region a Static ID
         *   if it is going to be used from JavaScript otherwise an internally generated id is used. The region id is
         *   substituted in the region template using the #REGION_STATIC_ID# string.
         *   The region id can be found by viewing the page source in the browser.
         * @param pRegionImpl - An object that provides the methods and properties for the region interface. It should provide
         *   a string type property. It can provide any additional methods that would be useful to developers.
         *   A default implementation is provided for any standard methods or properties omitted. See {@link region} for
         *   the properties and methods supported by the interface.
         */
        function create(pRegionId: string, pRegionImpl: any): void;
        /**
         * <p>This function is only for region plug-in developers. It will destroy and remove the behaviors associated with a
         * region element. It does not remove the region element from the DOM. It is not necessary to call this function
         * if the region will exist for the lifetime of the page. If the region is implemented by a widget that has a
         * destroy method then this function can be called when the widget is destroyed.</p>
         * @example
         * <caption>The following destroys the region interface but the region element remains on the page.</caption>
         * apex.region.destroy( someRegionId );
         * @param pRegionId - Region id or region static id. It is a best practice to give a region a Static ID
         *   if it is going to be used from JavaScript otherwise an internally generated id is used. The region id is
         *   substituted in the region template using the #REGION_STATIC_ID# string.
         *   The region id can be found by viewing the page source in the browser.
         */
        function destroy(pRegionId: string): void;
        /**
         * <p>This function returns true if and only if there is a DOM element with id equal to pRegionId that has had
         * a {@link region} interface created for it with {@link apex.region.create}.</p>
         *
         * <p>To support older regions that
         * don't implement a region interface (by calling apex.region.create) the default implementation of
         * apex.region will attempt to treat any DOM element with an id as if it were an Application Express region.
         * This function allows you to distinguish true Application Express regions from arbitrary DOM elements.</p>
         * @example
         * <caption>The following will only focus the region if it is an Application Express region.</caption>
         * if ( apex.region.isRegion( someId ) ) {
         *     apex.region( someId ).focus();
         * }
         * @param pRegionId - Region id or region static id. It is a best practice to give a region a Static ID
         *   if it is going to be used from JavaScript otherwise an internally generated id is used. The region id is
         *   substituted in the region template using the #REGION_STATIC_ID# string.
         *   The region id can be found by viewing the page source in the browser.
         * @returns true if there is an element with the given id that supports the region interface.
         */
        function isRegion(pRegionId: string): boolean;
        /**
         * <p>Returns the region that contains the <code class="prettyprint">pTarget</code> element.
         * Returns null if there is no <code class="prettyprint">pTarget</code> element or if it is
         * not in a region that has been initialized with a call to {@link apex.region.create}.</p>
         * @example
         * <caption>The following will refresh the region that contains a button with class <code class="prettyprint">refresh-button</code>
         *     when it is clicked.</caption>
         * apex.jQuery( ".refresh-button" ).click( function( event ) {
         *     var region = apex.region.findClosest( event.target );
         *     if ( region ) {
         *         region.refresh();
         *     }
         * });
         * @param pTarget - A DOM element or CSS selector suitable as the first argument to the jQuery function.
         * @returns A region interface or null if the element corresponding to
         *     <code class="prettyprint">pTarget</code> is not inside a region.
         */
        function findClosest(pTarget: Element | string): region | null;
    }
    /**
     * <p>The apex.region namespace contains global functions related to Oracle Application Express regions.
     * The {@link apex.region} function provides access to a {@link region} interface for a specific region.</p>
     */
    namespace region {
        /**
         * <p>This function is only used by region plug-in developers. It provides a plug-in specific implementation for the region.</p>
         *
         * <p>Use this function to give a region plug-in a set of behaviors defined by <code class="prettyprint">pRegionImpl</code>.
         * The <code class="prettyprint">pRegionImpl</code> parameter can provide its own implementation for standard
         * methods (such as refresh, focus, widget) or omit them to get the default implementation. It can add its own methods as well.
         * It should include a <code class="prettyprint">type</code> string property that specifies the type of region. If the region is implemented
         * with a jQuery UI style widget (using widget factory) then it should provide an implementation for the
         * {@link region#widget} method and define the {@link region#widgetName} property so that the
         * {@link region#call} method works.</p>
         * @example
         * <caption>The following is region initialization code for a hypothetical region plug-in:</caption>
         * function initFancyList( pRegionId, ... ) {
         *     ...
         *     apex.region.create( pRegionId, {
         *         type: "FancyList",
         *         focus: function() {
         *             // code to focus region
         *         },
         *         refresh: function() {
         *             // code to refresh region
         *         }
         *     });
         * }
         * @param pRegionId - Region id or region static id. It is a best practice to give a region a Static ID
         *   if it is going to be used from JavaScript otherwise an internally generated id is used. The region id is
         *   substituted in the region template using the #REGION_STATIC_ID# string.
         *   The region id can be found by viewing the page source in the browser.
         * @param pRegionImpl - An object that provides the methods and properties for the region interface. It should provide
         *   a string type property. It can provide any additional methods that would be useful to developers.
         *   A default implementation is provided for any standard methods or properties omitted. See {@link region} for
         *   the properties and methods supported by the interface.
         */
        function create(pRegionId: string, pRegionImpl: any): void;
        /**
         * <p>This function is only for region plug-in developers. It will destroy and remove the behaviors associated with a
         * region element. It does not remove the region element from the DOM. It is not necessary to call this function
         * if the region will exist for the lifetime of the page. If the region is implemented by a widget that has a
         * destroy method then this function can be called when the widget is destroyed.</p>
         * @example
         * <caption>The following destroys the region interface but the region element remains on the page.</caption>
         * apex.region.destroy( someRegionId );
         * @param pRegionId - Region id or region static id. It is a best practice to give a region a Static ID
         *   if it is going to be used from JavaScript otherwise an internally generated id is used. The region id is
         *   substituted in the region template using the #REGION_STATIC_ID# string.
         *   The region id can be found by viewing the page source in the browser.
         */
        function destroy(pRegionId: string): void;
        /**
         * <p>This function returns true if and only if there is a DOM element with id equal to pRegionId that has had
         * a {@link region} interface created for it with {@link apex.region.create}.</p>
         *
         * <p>To support older regions that
         * don't implement a region interface (by calling apex.region.create) the default implementation of
         * apex.region will attempt to treat any DOM element with an id as if it were an Application Express region.
         * This function allows you to distinguish true Application Express regions from arbitrary DOM elements.</p>
         * @example
         * <caption>The following will only focus the region if it is an Application Express region.</caption>
         * if ( apex.region.isRegion( someId ) ) {
         *     apex.region( someId ).focus();
         * }
         * @param pRegionId - Region id or region static id. It is a best practice to give a region a Static ID
         *   if it is going to be used from JavaScript otherwise an internally generated id is used. The region id is
         *   substituted in the region template using the #REGION_STATIC_ID# string.
         *   The region id can be found by viewing the page source in the browser.
         * @returns true if there is an element with the given id that supports the region interface.
         */
        function isRegion(pRegionId: string): boolean;
        /**
         * <p>Returns the region that contains the <code class="prettyprint">pTarget</code> element.
         * Returns null if there is no <code class="prettyprint">pTarget</code> element or if it is
         * not in a region that has been initialized with a call to {@link apex.region.create}.</p>
         * @example
         * <caption>The following will refresh the region that contains a button with class <code class="prettyprint">refresh-button</code>
         *     when it is clicked.</caption>
         * apex.jQuery( ".refresh-button" ).click( function( event ) {
         *     var region = apex.region.findClosest( event.target );
         *     if ( region ) {
         *         region.refresh();
         *     }
         * });
         * @param pTarget - A DOM element or CSS selector suitable as the first argument to the jQuery function.
         * @returns A region interface or null if the element corresponding to
         *     <code class="prettyprint">pTarget</code> is not inside a region.
         */
        function findClosest(pTarget: Element | string): region | null;
    }
    /**
     * The apex.server namespace contains all Ajax functions to communicate with the Oracle Application Express server.
     */
    namespace server {
        /**
         * <p>This function calls the PL/SQL ajax function that has been defined for a plug-in. This function is a
         * wrapper around the jQuery.ajax function and supports a subset of the jQuery.ajax options plus additional
         * Oracle Application Express specific options.</p>
         *
         * <p>The plug-in PL/SQL Ajax function is identified using the value returned by the PL/SQL package
         * apex_plugin.get_ajax_identifier. There are two ways to provide the plug-in Ajax identifier:</p>
         * <ul>
         * <li>Provide the pAjaxIdentifier as the first argument</li>
         * <li>Provide information about the region(s) including the ajaxIdentifier in the
         *   pData object structure. See pData description for details.</li>
         * </ul>
         * @example
         * <caption>This example demonstrates a call to apex.server.plugin, sets the scalar value x01 to test
         *     (which can be accessed from PL/SQL using apex_application.g_x01) and sets the page item's P1_DEPTNO and P1_EMPNO
         *     values in session state (using jQuery selector syntax). The P1_MY_LIST item is used as the element for which
         *     the apexbeforerefresh and apexafterrefresh events are fired. P1_MY_LIST is used as the element for which to
         *     display the loading indicator next to. The success callback is stubbed out and is used for developers to add
         *     their own code that fires when the call successfully returns. The value for lAjaxIdentifier must be set to the
         *     value returned by the server PL/SQL API apex_plugin.get_ajax_identifier.</caption>
         * apex.server.plugin ( lAjaxIdentifier, {
         *     x01: "test",
         *     pageItems: "#P1_DEPTNO,#P1_EMPNO"
         * }, {
         *     refreshObject: "#P1_MY_LIST",
         *     loadingIndicator: "#P1_MY_LIST",
         *     success: function( data ) {
         *         // do something here
         *     }
         * } );
         * @example
         * <caption>See also the examples for {@link apex.server.process} because handling the response
         * is the same for both the callback function and promise cases.</caption>
         * @param [pAjaxIdentifier] - The plug-in Ajax identifier. If not given then pData must include a regions
         *                                   array that includes a region with property ajaxIdentifier.
         * @param [pData] - Object containing data to send to the server in the ajax request.
         *     The object is serialized as JSON and sent to the server in parameter p_json.
         *     Data for specific regions can be sent in the following format:
         * <pre class="prettyprint"><code>{
         *     "regions": [ {
         *        "id": &lt;region-id-or-static-id>,
         *        "ajaxIdentifier": &lt;ajaxIdentifier>,
         *        &lt;any other data specific to the region plug-in>
         *     }, ...]
         * }
         * </code></pre>
         *     <p>The following properties are treated as special:</p>
         * @param [pData.pageItems] - Identifies the page or column items that will be
         *     included in the request. It can be a jQuery selector, jQuery object, Element, or an array of item names.
         *     These items will be made available in session state on the server. If pageItems contains column items then
         *     pOptions should include the target property, so that the region session state context can be determined.
         * @param [pData.xnn] - These properties are moved out of the p_json object
         *     and sent as x01 - x20 scalar parameters.
         * @param [pData.fnn] - These properties are moved out of the p_json object
         *     and sent as f01 - f20 array parameters.
         * @param [pOptions] - <p>An object that is used to set additional options to control the Ajax call
         *     including before and after processing. See jQuery documentation of jQuery.ajax for these supported
         *     options: accepts, dataType, beforeSend, contents, converters, dataFilter, headers, complete, statusCode, error,
         *     success. The dataType option defaults to json. The async option is deprecated and will be removed in a
         *     future release. See {@link https://docs.jquery.com/}</p>
         *     <p>The following Oracle Application Express specific options are supported:</p>
         * @param [pOptions.refreshObject] - A jQuery selector string, jQuery object, or Element
         *     that identifies the DOM element that the {@link apex.event:apexbeforerefresh} and {@link apex.event:apexafterrefresh}
         *     events are triggered on. If this option is not supplied these events are not triggered.
         * @param [pOptions.refreshObjectData] - Only applies if the refreshObject option is given.
         *     Specifies extra data that is passed in the {@link apex.event:apexbeforerefresh}
         *     and {@link apex.event:apexafterrefresh} events so that any handlers
         *     defined for these events can access this data. In Dynamic Actions defined for the Before Refresh or
         *     After Refresh events, this can be accessed from JavaScript using the <code class="prettyprint">this.data</code> property.
         *     For custom jQuery event handlers, this can be accessed through the <code class="prettyprint">pData</code> parameter of the event handler.
         * @param [pOptions.clear] - A no argument function that is called after the
         *     {@link apex.event:apexbeforerefresh} event has fired and before the actual Ajax call is made.
         *     This function can be used to clear the DOM or any other state maintained
         *     by the Element or component for which this Ajax request is being made.
         * @param [pOptions.loadingIndicator] - Identifies the element(s) that will
         *     have a loading indicator (progress spinner) displayed next to it during the Ajax call. The element can be
         *     specified with a jQuery selector, jQuery object or Element. The loadingIndicator can also be a function that
         *     receives the loading indicator as a jQuery object, which it can use as is or modify or replace and attach to the
         *     DOM where appropriate. The function must return a reference to the jQuery loading indicator or return a no
         *     argument function that is called to stop and/or remove the progress indicator. For example:
         *     <pre class="prettyprint"><code>function( pLoadingIndicator ) {
         *     return pLoadingIndicator.prependTo(
         *         apex.jQuery( "td.shuttleControl", gShuttle) );
         * }
         * </code></pre>
         * @param [pOptions.loadingIndicatorPosition] - One of the following six options to define the position of the
         *     loading indicator displayed. Only considered if the value passed to loadingIndicator is not a function.
         *     <ul>
         *     <li>before: Displays before the DOM element(s) defined by loadingIndicator.</li>
         *     <li>after: Displays after the DOM element(s) defined by loadingIndicator.</li>
         *     <li>prepend: Displays inside at the beginning of the DOM element(s) defined by loadingIndicator.</li>
         *     <li>append: Displays inside at the end of the DOM element(s) defined by loadingIndicator.</li>
         *     <li>centered: Displays in the center of the DOM element defined by loadingIndicator.</li>
         *     <li>page: Displays in the center of the page.</li>
         *     </ul>
         * @param [pOptions.queue] - An object specifying the name of a queue and queue action. For example:
         * <pre class="prettyprint"><code>{
         *     name: "updateList",
         *     action: "replace"
         * }
         * </code></pre>
         *     <p>If no queue option is given, the request is made right away without regard to any previous requests.</p>
         *     <p>The name property specifies the name of the queue to add this request to.</p>
         *     <p>The action property can be one of "wait" (the default), "replace", "lazyWrite".</p>
         *     <ul>
         *     <li>wait: This action is the default and is used to send requests one after the other.
         *     When the action is wait, the request is added to the named queue. If there are no other requests in that
         *     queue, in progress or waiting, then this request is executed. Otherwise it waits on the named queue until
         *     the ones before it are complete.</li>
         *     <li>replace: This action is used when this current request makes any previous requests on the named queue,
         *     in progress or waiting, obsolete or invalid. This current request aborts any in progress request and clears
         *     out any waiting requests on the named queue and then is executed.
         *     Waiting requests are rejected with status "superseded".</li>
         *     <li>lazyWrite: This action is used to throttle requests to the server to persist data. This should only be used
         *     to persist non-critical data such as user interface settings or state. Use when the data may change
         *     frequently and only the last data values need to be saved. For example this is useful for persisting
         *     splitter position, or tree expansion and focus state etc. The queue name is unique for each data unit.
         *     For example if you were saving the position of two different splitters use a unique name for each one so that
         *     latest update to one doesn't overwrite a previous lazy write of the other. When using lazyWrite Queue the
         *     refreshObject, clear, loadingIndicator, and loadingIndicatorPosition are most likely not useful because
         *     nothing is being loaded or refreshed.</li>
         *     </ul>
         *     <p>It is possible to mix requests with wait and replace actions on the same queue. The lazyWrite action
         *     should not be used with a queue name that is also used with wait and replace actions.</p>
         * @param [pOptions.target] - The target element (DOM element or jQuery Selector) that this request pertains to.
         *     This is used to get session state context from the enclosing region. This option must be provided if pageItems
         *     property of pData contains any column items.
         * @returns A promise object. The promise <code class="prettyprint">done</code> method is called
         *     if the Ajax request completes successfully. This is called in the same cases and with the same arguments as
         *     the <code class="prettyprint">success</code> callback function in <code class="prettyprint">pOptions</code>.
         *     The promise <code class="prettyprint">fail</code> method is called if the Ajax request completes with an error
         *     including internally detected Oracle Application Express errors.
         *     This is called in the same cases and with the same arguments as the <code class="prettyprint">error</code>
         *     callback function in <code class="prettyprint">pOptions</code>.
         *     The promise also has an <code class="prettyprint">always</code> method that is called after
         *     <code class="prettyprint">done</code> and <code class="prettyprint">error</code>. The promise is returned
         *     even when queue options are used. The promise is not a <code class="prettyprint">jqXHR</code> object
         *     but does have an <code class="prettyprint">abort</code> method.
         *     The <code class="prettyprint">abort</code> method does not work for requests that use any queue options.
         *     In addition the promise <code class="prettyprint">fail</code> method can be be called
         *     with <code class="prettyprint">textStatus</code> of "superseded" or "abort" depending on
         *     queuing options. If the {@link apex.event:apexbeforerefresh} event cancels the request
         *     the <code class="prettyprint">textStatus</code> is "cancel".
         *     For an error response from the APEX server the <code class="prettyprint">textStatus</code> is "APEX"
         *     and there may be more info in the <code class="prettyprint">errorThrown</code> argument.
         */
        function plugin(pAjaxIdentifier?: string, pData?: {
            pageItems?: string | jQuery | Element | string[];
            xnn?: string;
            fnn?: string | any[];
        }, pOptions?: {
            refreshObject?: jQuery | Element | string;
            refreshObjectData?: any | any[];
            clear?: (...params: any[]) => any;
            loadingIndicator?: string | jQuery | Element | ((...params: any[]) => any);
            loadingIndicatorPosition?: string;
            queue?: any;
            target?: jQuery | Element;
        }): Promise;
        /**
         * <p>Returns the URL to issue a GET request to the PL/SQL Ajax function which has been defined for a plug-in.</p>
         * @example
         * <caption>This example returns a URL to issue a GET request to the PL/SQL Ajax function which has been
         *     defined for a plug-in, where the URL sets the scalar value x01 to test (which can be accessed from PL/SQL
         *     using apex_application.g_x01) and will also set the page item's P1_DEPTNO and P1_EMPNO values in session
         *     state (using jQuery selector syntax). The value for lAjaxIdentifier must be set to the value returned
         *     by the server PL/SQL API apex_plugin.get_ajax_identifier.</caption>
         *
         * var lUrl = apex.server.pluginUrl ( lAjaxIdentifier, {
         *     x01: "test",
         *     pageItems: "#P1_DEPTNO,#P1_EMPNO"
         * } );
         * @param pAjaxIdentifier - Use the value returned by the PL/SQL package apex_plugin.get_ajax_identifier to identify your plug-in.
         * @param [pData] - Optional object that is used to set additional values which are included into the URL.
         *     The special property, pageItems, which can be of type jQuery selector, jQuery or DOM object or array of item
         *     names, identifies the page items which are included in the URL. You can also set additional parameters that
         *     the apex.show procedure provides (for example you can set the scalar parameters x01 - x10 and the
         *     arrays f01 - f20).
         * @returns The URL to issue a GET request.
         */
        function pluginUrl(pAjaxIdentifier: string, pData?: any): string;
        /**
         * <p>This function returns a URL to issue a GET request to the current page or page specified in pPage.</p>
         * @example
         * <caption>This example gets a URL to issue a GET request to the DELETE function which has been defined
         *     for this page, where the URL sets the scalar value x01 to test (which can be accessed from PL/SQL using
         *     apex_application.g_x01) and will also set the page item's P1_DEPTNO and P1_EMPNO values in session
         *     state (using jQuery selector syntax).</caption>
         * apex.server.url( {
         *     p_request: "DELETE",
         *     x01: "test",
         *     pageItems: "#P1_DEPTNO,#P1_EMPNO"
         * } );
         * @param [pData] - Optional object that is used to set additional values which are included into the URL.
         *     The special property, pageItems, which can be of type jQuery selector, jQuery or DOM object or array of item
         *     names, identifies the page items which are included in the URL. You can also set additional parameters that
         *     the apex.show procedure provides (for example you can set the scalar parameters x01 - x10 and the
         *     arrays f01 - f20).
         * @param [pPage] - The ID of the page to issue a GET request for. The default is the current page.
         * @returns The URL to issue a GET request.
         */
        function url(pData?: any, pPage?: string): string;
        /**
         * <p>This function calls a PL/SQL on-demand (Ajax Callback) process defined on page or application level.
         * This function is a wrapper around the jQuery.ajax function and supports a subset of the jQuery.ajax options
         * plus additional Oracle Application Express specific options.</p>
         * @example
         * <caption>This example demonstrates an Ajax call to an on-demand process called MY_PROCESS and sets the
         *     scalar value x01 to test (which can be accessed from PL/SQL using apex_application.g_x01) and sets the page
         *     item's P1_DEPTNO and P1_EMPNO values in session state (using jQuery selector syntax). The success callback is
         *     stubbed out so that developers can add their own code that fires when the call successfully returns.
         *     The <code class="prettyprint">data</code> parameter to the success callback contains the response returned
         *     from on-demand process.</caption>
         * apex.server.process( "MY_PROCESS", {
         *     x01: "test",
         *     pageItems: "#P1_DEPTNO,#P1_EMPNO"
         * }, {
         *     success: function( data )  {
         *         // do something here
         *     },
         *     error: function( jqXHR, textStatus, errorThrown ) {
         *         // handle error
         *     }
         * } );
         * @example
         * <caption>This example is similar to the previous one except that the response is handled using the returned
         * promise and the page items are given as an array.</caption>
         * var result = apex.server.process( "MY_PROCESS", {
         *     x01: "test",
         *     pageItems: ["P1_DEPTNO","P1_EMPNO"]
         * } );
         * result.done( function( data ) {
         *     // do something here
         * } ).fail(function( jqXHR, textStatus, errorThrown ) {
         *     // handle error
         * } ).always( function() {
         *     // code that needs to run for both success and failure cases
         * } );
         * @param pName - The name of the PL/SQL on-demand page or application process to call.
         * @param [pData] - Object containing data to send to the server in the ajax request.
         *     The Object is serialized as JSON and sent to the server in parameter p_json.
         *     Data for specific regions can be sent in the following format:
         * <pre class="prettyprint"><code>{
         *     "regions": [ {
         *        "id": &lt;region-id-or-static-id>,
         *        &lt;any other data specific to the region plug-in>
         *     }, ...]
         * }
         * </code></pre>
         *     <p>The following properties are treated special:</p>
         * @param [pData.pageItems] - Identifies the page or column items that will be
         *     included in the request. It can be a jQuery selector, jQuery object, Element, or array of item names.
         *     These items will be made available in session state on the server. If pageItems contains column items then
         *     pOptions should include the target property so that the region session state context can be determined.
         * @param [pData.xnn] - These properties are moved out of the p_json object
         *     and sent as x01 - x20 scalar parameters.
         * @param [pData.fnn] - These properties are moved out of the p_json object
         *     and sent as f01 - f20 array parameters.
         * @param [pOptions] - <p>An object that is used to set additional options to control the Ajax call
         *     including before and after processing. See jQuery documentation of jQuery.ajax for these supported
         *     options: accepts, dataType, beforeSend, contents, converters, dataFilter, headers, complete, statusCode, error,
         *     success. The dataType option defaults to json. The async option is deprecated and will be removed in a
         *     future release. See {@link https://docs.jquery.com/}</p>
         *     <p>The following Oracle Application Express specific options are supported:</p>
         * @param [pOptions.refreshObject] - A jQuery selector string, jQuery object, or Element
         *     that identifies the DOM element that the {@link apex.event:apexbeforerefresh} and {@link apex.event:apexafterrefresh}
         *     events are triggered on. If this option is not supplied these events are not triggered.
         * @param [pOptions.refreshObjectData] - Only applies if the refreshObject option is given.
         *     Specifies extra data that is passed in the {@link apex.event:apexbeforerefresh}
         *     and {@link apex.event:apexafterrefresh} events so that any handlers
         *     defined for these events can access this data. In Dynamic Actions defined for the Before Refresh or
         *     After Refresh events, this can be accessed from JavaScript using the <code class="prettyprint">this.data</code> property.
         *     For custom jQuery event handlers, this can be accessed through the <code class="prettyprint">pData</code> parameter of the event handler.
         * @param [pOptions.clear] - A no argument function that is called after the
         *     {@link apex.event:apexbeforerefresh} event has fired and before the actual Ajax call is made.
         *     This function can be used to clear the DOM or any other state maintained
         *     by the Element or component for which this Ajax request is being made.
         * @param [pOptions.loadingIndicator] - Identifies the element(s) that will
         *     have a loading indicator (progress spinner) displayed next to it during the Ajax call. The element can be
         *     specified with a jQuery selector, jQuery object or Element. The loadingIndicator can also be a function that
         *     receives the loading indicator as a jQuery object, which it can use as is or modify or replace and attach to the
         *     DOM where appropriate. The function must return a reference to the jQuery loading indicator or return a no
         *     argument function that is called to stop and/or remove the progress indicator. For example:
         *     <pre class="prettyprint"><code>function( pLoadingIndicator ) {
         *     return pLoadingIndicator.prependTo(
         *         apex.jQuery( "td.shuttleControl", gShuttle) );
         * }
         * </code></pre>
         * @param [pOptions.loadingIndicatorPosition] - One of the following six options to define the position of the
         *     loading indicator displayed. Only considered if the value passed to loadingIndicator is not a function.
         *     <ul>
         *     <li>before: Displays before the DOM element(s) defined by loadingIndicator.</li>
         *     <li>after: Displays after the DOM element(s) defined by loadingIndicator.</li>
         *     <li>prepend: Displays inside at the beginning of the DOM element(s) defined by loadingIndicator.</li>
         *     <li>append: Displays inside at the end of the DOM element(s) defined by loadingIndicator.</li>
         *     <li>centered: Displays in the center of the DOM element defined by loadingIndicator.</li>
         *     <li>page: Displays in the center of the page.</li>
         *     </ul>
         * @param [pOptions.queue] - An object specifying the name of a queue and queue action. For example:
         * <pre class="prettyprint"><code>{
         *     name: "updateList",
         *     action: "replace"
         * }
         * </code></pre>
         *     <p>If no queue option is given, the request is made right away without regard to any previous requests.</p>
         *     <p>The name property specifies the name of the queue to add this request to.</p>
         *     <p>The action property can be one of "wait" (the default), "replace", "lazyWrite".</p>
         *     <ul>
         *     <li>wait: This action is the default and is used to send requests one after the other.
         *     When the action is wait, the request is added to the named queue. If there are no other requests in that
         *     queue in progress or waiting, then this request is executed. Otherwise it waits on the named queue until
         *     the ones before it are complete.</li>
         *     <li>replace: This action is used when this current request makes any previous requests on the named queue
         *     in progress or waiting obsolete or invalid. This current request aborts any in progress request and clears
         *     out any waiting requests on the named queue and then is executed.
         *     Waiting requests are rejected with status "superseded".</li>
         *     <li>lazyWrite: This action is used to throttle requests to the server to persist data. This should only be used
         *     to persist non-critical data such as user interface settings or state. Use when the data may change
         *     frequently and only the last data values need to be saved. For example this is useful for persisting
         *     splitter position, or tree expansion and focus state etc. The queue name is unique for each data unit.
         *     For example if you were saving the position of two different splitters use a unique name for each one so that
         *     latest update to one doesn't overwrite a previous lazy write of the other. When using lazyWrite Queue the
         *     refreshObject, clear, loadingIndicator, and loadingIndicatorPosition are most likely not useful because
         *     nothing is being loaded or refreshed.</li>
         *     </ul>
         *     <p>It is possible to mix requests with wait and replace actions on the same queue. The lazyWrite action
         *     should not be used with a queue name that is also used with wait and replace actions.</p>
         * @param [pOptions.target] - The target element (DOM element or jQuery Selector) that this request pertains to.
         *     This is used to get session state context from the enclosing region. This option must be provided if pageItems
         *     property of pData contains any column items.
         * @returns A promise object. The promise <code class="prettyprint">done</code> method is called
         *     if the Ajax request completes successfully. This is called in the same cases and with the same arguments as
         *     the <code class="prettyprint">success</code> callback function in <code class="prettyprint">pOptions</code>.
         *     The promise <code class="prettyprint">fail</code> method is called if the Ajax request completes with an error
         *     including internally detected Oracle Application Express errors.
         *     This is called in the same cases and with the same arguments as the <code class="prettyprint">error</code>
         *     callback function in <code class="prettyprint">pOptions</code>.
         *     The promise also has an <code class="prettyprint">always</code> method that is called after
         *     <code class="prettyprint">done</code> and <code class="prettyprint">error</code>. The promise is returned
         *     even when queue options are used. The promise is not a <code class="prettyprint">jqXHR</code> object
         *     but does have an <code class="prettyprint">abort</code> method.
         *     The <code class="prettyprint">abort</code> method does not work for requests that use any queue options.
         *     In addition the promise <code class="prettyprint">fail</code> method can be be called
         *     with <code class="prettyprint">textStatus</code> of "superseded" or "abort" depending on
         *     queuing options. If the {@link apex.event:apexbeforerefresh} event cancels the request
         *     the <code class="prettyprint">textStatus</code> is "cancel".
         *     For an error response from the APEX server the <code class="prettyprint">textStatus</code> is "APEX"
         *     and there may be more info in the <code class="prettyprint">errorThrown</code> argument.
         */
        function process(pName: string, pData?: {
            pageItems?: string | jQuery | Element | string[];
            xnn?: string;
            fnn?: string | any[];
        }, pOptions?: {
            refreshObject?: jQuery | Element | string;
            refreshObjectData?: any | any[];
            clear?: (...params: any[]) => any;
            loadingIndicator?: string | jQuery | Element | ((...params: any[]) => any);
            loadingIndicatorPosition?: string;
            queue?: any;
            target?: jQuery | Element;
        }): Promise;
        /**
         * Given a text string, break it up in to an array of strings no greater than 8000 chars each if needed.
         * If the original text is less than 8000 chars, return it.
         * @example
         * <caption>This example gets around the 32k size limit by sending text from text area item P1_TEXTAREA as
         * the F01 array. A server process needs to loop over the apex_application.g_f01 array.</caption>
         * apex.gPageContext$.on( "apexpagesubmit", function() {
         *     var $ = apex.jQuery,
         *         form$ = $( "#wwvFlowForm" ),
         *         f1 = apex.server.chunk( $v( "P1_TEXT" ) );
         *
         *     if ( !$.isArray( f1 ) ) {
         *         f1 = [f1];
         *     }
         *     f1.forEach( function( v ) {
         *         form$.append( "<input type='hidden' name='f01' value='" + v + "'>" );
         *     });
         *     $s( "P1_TEXT", " " );
         * } );
         * @param Text - string to split into an array of chunks no bigger than 8000 chars.
         * @returns The input text string, if less than 8000 chars, or an array of the split up input text.
         */
        function chunk(Text: string): string | string[];
        /**
         * <p>Load JavaScript files asynchronously using RequireJS require or jQuery getScript.
         * It is rare that an APEX app needs to dynamically load JavaScript but if it does it should use this rather than
         * getScript.
         * The reason is that RequreJS may or may not be on a page. If it is and libraries that are RequireJS aware are loaded
         * they will give an error because they expect to be loaded by a call to require. If RequireJS is not on the page then
         * require cannot be used.</p>
         * @example
         * <caption>The following example loads a regular library that does not need RequireJS.</caption>
         * apex.server.loadScript( {
         *    path: "./library_1.js"
         * }, function() {
         *    console.log( "library_1 is ready." );
         * } );
         * @example
         * <caption>The following example loads a library that requires RequireJS and creates its own
         *     namespace "myModule".</caption>
         * apex.server.loadScript( {
         *    path: "./library_2.js",
         *    requirejs: true,
         *    global: "myModule"
         * }, function() {
         *    console.log( "library 2 loaded ", myModule );
         * } );
         * @example
         * <caption>The following example loads a concatenated libraries file generated by RequireJS Optimizer,
         *     assuming requireJS is already on the page.</caption>
         * apex.server.loadScript( {
         *    path: "./library_all.js",
         *    requirejs: true
         * }, function() {
         *    console.log( myModule_1, myModule_2 ... );
         * } );
         * @param pOptions - An object that contains the following attributes:
         * @param pOptions.path - The location of the JavaScript file to load.
         * @param [pOptions.requirejs] - Whether to use RequireJS to load this file. The default is false.
         * @param [pOptions.global] - The global name introduced by this file. The existing
         *     one is overwritten. Leave this option empty if the file is generated by RequireJS optimizer.
         * @param [callback] - A no argument function to be executed once script is loaded.
         * @returns If getScript is used then the return value is a jqXHR style promise. Otherwise there is no return value.
         */
        function loadScript(pOptions: {
            path: string;
            requirejs?: boolean;
            global?: string;
        }, callback?: (...params: any[]) => any): any;
    }
    /**
     * <p>The {@link apex}.storage namespace contains all functions related browser storage features such as cookies and session storage.</p>
     *
     * <div class="hw">
     *     <h3 class="name" id="about-section">
     *         About local and session storage
     *         <a class="bookmarkable-link" title="Bookmarkable Link" aria-label="Bookmark About local and session storage" href="#about-section"></a>
     *     </h3>
     * </div>
     * <p>Local storage and session storage, collectively known as web storage, are a browser feature that securely stores key value pairs
     * associated with an origin (web site). The keys and values are strings. The amount of storage space for web storage is greater than
     * that of cookies but it is not unlimited. Another advantage over cookies is that the key value pars are not transmitted with each request.</p>
     *
     * <p>Both local storage and session storage use the same API to set, get, and remove name value pairs. The difference is that
     * session storage goes away when the browser session ends and local storage is available even when the browser restarts.
     * Keep in mind that the browser is free to limit or delete data stored in local storage at the user's request. Unlike data
     * stored on the server local storage is not shared between browsers on different machines or even different browsers on the same machine.</p>
     *
     * <p>Because APEX supports multiple applications, multiple workspaces and even instances of the same application running in multiple
     * workspaces there can arise conflicts with using web storage because all the apps from a single APEX instance (which is a single
     * origin or web site) share the same web storage space. The {@link apex.storage.getScopedLocalStorage} and {@link apex.storage.getScopedSessionStorage}
     * solve this problem buy partitioning the storage into a scope based on application id an optionally additional information such as
     * page id and region id. The scope is crated by using a prefix on all the storage keys. This avoids conflicts when different apps or
     * different instances of the same app use the same keys but it is not a secure partition. Consider this carefully before storing
     * sensitive information in web storage.</p>
     */
    namespace storage {
        /**
         * <p>Returns the value of the specified cookie.</p>
         * @example
         * <caption>Returns the value of the cookie TEST</caption>
         *
         * var value = apex.storage.getCookie( "TEST" );
         * @param pName - The name of the cookie.
         * @returns The string value of the cookie.
         */
        function getCookie(pName: string): string;
        /**
         * <p>Sets a cookie to the specified value.</p>
         * @example
         * <caption>Sets the value APEX for the cookie TEST</caption>
         *
         * apex.storage.setCookie( "TEST", "APEX" );
         * @param pName - The name of the cookie.
         * @param pValue - The value to set the cookie to.
         */
        function setCookie(pName: string, pValue: string): void;
        /**
         * <p>Returns <code class="prettyprint">true</code> if the browser supports the local storage API and <code class="prettyprint">false</code> otherwise. Most modern browsers support this feature but some allow the user to turn it off.</p>
         * @example
         * <caption>Sets the local storage <code class="prettyprint">"setting1"</code> to on if local storage is supported by the browser.</caption>
         *
         * var myStorage;
         * if ( apex.storage.hasLocalStorageSupport() ) {
         *   myStorage = apex.storage.getScopedLocalStorage({ prefix: "Acme" });
         *   myStorage.setItem( "setting1", "on" );
         * }
         * @returns <code class="prettyprint">true</code> if the browser supports the local storage API and <code class="prettyprint">false</code> otherwise.
         */
        function hasLocalStorageSupport(): boolean;
        /**
         * <p>Returns <code class="prettyprint">true</code> if the browser supports the session storage API and <code class="prettyprint">false</code> otherwise. Most modern browsers support this feature but some allow the user to turn it off.</p>
         * @example
         * <caption>Sets the session storage <code class="prettyprint">"setting1"</code> to on if session storage is supported by the browser.</caption>
         *
         * var myStorage;
         * if ( apex.storage.hasSessionStorageSupport() ) {
         *   myStorage = apex.storage.getScopedSessionStorage({ prefix: "Acme" });
         *   myStorage.setItem( "setting1", "on" );
         * }
         * @returns <code class="prettyprint">true</code> if the browser supports the session storage API and <code class="prettyprint">false</code> otherwise.
         */
        function hasSessionStorageSupport(): boolean;
        /**
         * <p>A storage wrapper object. This object has the same properties and functions as the native browser Storage interface.</p>
         * @property prefix - APEX specific property. The prefix for this scoped storage object.
         * @property length - The number of items in the scoped storage object.
         * @property key - The <code class="prettyprint">key( n )</code> function returns the nth key in the scoped storage object.
         * @property getItem - The <code class="prettyprint">getItem( key )</code> function returns the value for the given key.
         * @property setItem - The <code class="prettyprint">setItem( key, data )</code> function sets the value of the given key to data.
         * @property removeItem - The <code class="prettyprint">removeItem( key )</code> function removes the given key.
         * @property clear - The <code class="prettyprint">clear</code> function removes all keys from the scoped storage object.
         * @property sync - The APEX specific <code class="prettyprint">sync</code> function. Use to ensure the length property is correct if keys may have been added or removed by means external to this object.
         */
        type storageWrapper = {
            prefix: string;
            length: number;
            key: (...params: any[]) => any;
            getItem: (...params: any[]) => any;
            setItem: (...params: any[]) => any;
            removeItem: (...params: any[]) => any;
            clear: (...params: any[]) => any;
            sync: (...params: any[]) => any;
        };
        /**
         * <p>Returns a thin wrapper around the <code class="prettyprint">sessionStorage</code> object that scopes all keys to a prefix defined by the <code class="prettyprint">options</code> parameter. If sessionStorage is not supported, the returned object can be used but has no effect so it is not necessary test for support using {@link apex.storage.hasSessionStorageSupport} before calling this function.</p>
         * @example
         * <caption>Creates a session storage object that scopes all the keys using a prefix <code class="prettyprint">"Acme"</code> and the application id. It then sets and gets an item called <code class="prettyprint">"setting1"</code>.</caption>
         *
         * var myStorage,
         *     setting1;
         * if ( apex.storage.hasSessionStorageSupport() ) {
         *   myStorage = apex.storage.getScopedSessionStorage({ prefix: "Acme" });
         *   myStorage.setItem( "setting1", "on" );
         *   setting1 = myStorage.getItem( "setting1" );
         * }
         * @param options - An object used to define the scope of the session storage. This defines the storage key prefix used by the <code class="prettyprint">sessionStorage</code> wrapper object.
         * @param [options.prefix] - A static prefix string to add to all keys. The default is an empty string.
         * @param [options.useAppId] - Whether the application id will be included in the key. The default is true.
         * @param [options.usePageId] - Whether the application page id will be included in the key. The default is false.
         * @param [options.regionId] - An additional string to identify a region or other part of a page. The default is an empty string.
         * @returns A {@link apex.storage.storageWrapper|sessionStorage} wrapper object.
         */
        function getScopedSessionStorage(options: {
            prefix?: string;
            useAppId?: boolean;
            usePageId?: boolean;
            regionId?: string;
        }): sessionStorage;
        /**
         * <p>Returns a thin wrapper around the <code class="prettyprint">localStorage</code> object that scopes all keys to a prefix defined by the <code class="prettyprint">options</code> parameter. If localStorage is not supported, the returned object can be used but has no effect so it is not necessary test for support using {@link apex.storage.hasLocalStorageSupport} before calling this function.</p>
         * @example
         * <caption>Creates a local storage object that scopes all the keys using a prefix <code class="prettyprint">"Acme"</code> and the application id. It then sets and gets an item called <code class="prettyprint">"setting1"</code>.</caption>
         *
         * var myStorage,
         *     setting1;
         * if ( apex.storage.hasLocalStorageSupport() ) {
         *   myStorage = apex.storage.getScopedLocalStorage({ prefix: "Acme" });
         *   myStorage.setItem( "setting1", "on" );
         *   setting1 = myStorage.getItem( "setting1" );
         * }
         * @param options - An object used to define the scope of the local storage. This defines the storage key prefix used by the <code class="prettyprint">localStorage</code> wrapper object.
         * @param [options.prefix] - A static prefix string to add to all keys. The default is an empty string.
         * @param [options.useAppId] - Whether the application id will be included in the key. The default is true.
         * @param [options.usePageId] - Whether the application page id will be included in the key. The default is false.
         * @param [options.regionId] - An additional string to identify a region or other part of a page. The default is an empty string.
         * @returns A {@link apex.storage.storageWrapper|localStorage} wrapper object.
         */
        function getScopedLocalStorage(options: {
            prefix?: string;
            useAppId?: boolean;
            usePageId?: boolean;
            regionId?: string;
        }): localStorage;
    }
    /**
     * The apex.theme namespace contains functions useful for theme developers or that work closely with theme
     * related functionality. The functionality in this namespace may not be fully supported by all themes particularly
     * legacy, custom, or third party themes.
     */
    namespace theme {
        /**
         * <p>Display a standard item help dialog. This function may be useful for theme developers.
         * Theme requirements for the label Help Template:</p>
         * <ul>
         * <li>A click handler or javascript <code class="prettyprint">href</code> can invoke this function directly. For example:
         *     <code class="prettyprint"><pre>
         *         &lt;button ... onclick="apex.theme.popupFieldHelp('#CURRENT_ITEM_ID#','&SESSION.');" ...>Help&lt;/button></pre></code>
         * </li>
         * <li>The preferred way it to use the built-in delegated click event handler. For this give the
         *   clickable help element a class of <code class="prettyprint">js-itemHelp</code> and add a
         *   <code class="prettyprint">data-itemhelp</code> attribute with the current item id.
         *   For example:
         *   <code class="prettyprint"><pre>
         *     &lt;button class="... js-itemHelp" data-itemhelp="#CURRENT_ITEM_ID#" ...>Help&lt;/button></pre></code>
         * </li>
         * </ul>
         *
         * <p>The second method is preferred because you get Alt-F1 keyboard accessibility. For Alt+F1 to work the
         * label template Before Label and Item template attribute must include:
         *     <code class="prettyprint"><pre>
         *         id="#CURRENT_ITEM_CONTAINER_ID#"</pre></code>
         * With the first method you could add your own inline keydown handler.</p>
         * @example
         * <caption>The following example shows how a custom help message that looks like standard page item help
         * can be displayed.</caption>
         * apex.theme.popupFieldHelp( {title: "Custom Help", helpText: "Some helpful text"} );
         * @param pItemId - item id to display help for or an object with properties <code class="prettyprint">helpText</code>,
         *     and <code class="prettyprint">title</code>. When an object is given the other parameters are ignored.
         * @param [pSessionId] - Current session id
         * @param [pUrl] - Override to specify the URL to use to fetch the help content. It should not include
         *          the <code class="prettyprint">p_output_format</code> param. This is an advanced parameter that is normally not needed.
         */
        function popupFieldHelp(pItemId: string | any, pSessionId?: string, pUrl?: string): void;
        /**
         * <p>Open a region that supports being opened such as an inline dialog, inline popup, or collapsible region.
         * For a region to support this function, it must be implemented with a jQuery UI widget
         * that supports either open and close methods or expand and collapse methods.</p>
         * @example
         * <caption>The following example opens an inline dialog region with static id <code class="prettyprint">myDialog</code>.</caption>
         * apex.theme.openRegion( "myDialog" );
         * @param pRegion - The region to open. Either the region static id string or a jQuery object.
         * @returns The jQuery object of the region.
         */
        function openRegion(pRegion: string | jQuery): jQuery;
        /**
         * <p>Close a region that supports being opened such as an inline dialog, inline popup, or collapsible region.
         * For a region to support this function, it must be implemented with a jQuery UI widget
         * that supports either open and close methods or expand and collapse methods.</p>
         * @example
         * <caption>The following example closes an inline dialog region with static id <code class="prettyprint">myDialog</code>.</caption>
         * apex.theme.closeRegion( "myDialog" );
         * @param pRegion - The region to close. Either the region static id string or a jQuery object.
         * @returns The jQuery object of the region.
         */
        function closeRegion(pRegion: string | jQuery): jQuery;
        /**
         * <p>Test a media query. Return true if the document matches the given media query string and false otherwise.
         * This is a wrapper around <code>window.matchMedia</code>.</p>
         * @example
         * <caption>After each time the window is resized check and log a message if the viewport is at least 640 pixels wide.</caption>
         * apex.jQuery( window ).on( "apexwindowresized", function() {
         *     if ( apex.theme.mq( "(min-width: 640px)" ) ) {
         *         console.log( "Window resized, and viewport is at least 640px wide" );
         *     }
         * } );
         * @param pMediaQuery - The media query to test. For example: <code>(min-width: 400px)</code>
         * @returns true if the media query matches.
         */
        function mq(pMediaQuery: string): boolean;
    }
    /**
     * <p>The apex.util namespace contains general utility functions of Oracle Application Express.</p>
     */
    namespace util {
        /**
         * <p>Returns a new function that calls <code class="prettyprint">pFunction</code> but not until
         * <code class="prettyprint">pDelay</code> milliseconds after the last time the returned function is called.</p>
         * @example
         * <caption>This example calls the function formatValue in response to the user typing characters but only
         * after the user pauses typing. In a case like this formatValue would also be called from the blur event on the same item.</caption>
         * function formatValue() {
         *     var value = $v("P1_PHONE_NUMBER");
         *     // code to format value as a phone number
         *     $s("P1_PHONE_NUMBER_DISPLAY", value);
         * }
         * apex.jQuery( "#P1_PHONE_NUMBER" ).on( "keypress", apex.util.debounce( formatValue, 100 ) );
         * @param pFunction - The function to call.
         * @param pDelay - The time to wait before calling the function in milliseconds.
         * @returns The debounced version of <code class="prettyprint">pFunction</code>.
         */
        function debounce(pFunction: (...params: any[]) => any, pDelay: number): (...params: any[]) => any;
        /**
         * <p>Function that returns an array based on the value passed in <code class="prettyprint">pValue</code>.</p>
         * @example
         * <caption>This example splits the string into an array with 3 items:
         * <code class="prettyprint">["Bags","Shoes","Shirts"]</code>.</caption>
         * lProducts = apex.util.toArray( "Bags:Shoes:Shirts" );
         * @example
         * <caption>This example splits the string into an array just like in the previous example. The only
         * difference is the separator character is ",".</caption>
         * lProducts = apex.util.toArray( "Bags,Shoes,Shirts", "," );
         * @example
         * <caption>This example returns the jQuery object as an array.</caption>
         * lTextFields = apex.util.toArray( jQuery("input[type=text]") );
         * @param pValue - If this is a string, then the string will be split into an array using the
         *                          <code class="prettyprint">pSeparator</code> parameter.
         *                          If it's not a string, then we try to convert the value with
         *                          <code class="prettyprint">apex.jQuery.makeArray</code> to an array.
         * @param [pSeparator = ":"] - Separator used to split a string passed in <code class="prettyprint">pValue</code>,
         *   defaults to colon if not specified. Only needed when <code class="prettyprint">pValue</code> is a string.
         *   It is ignored otherwise.
         */
        function toArray(pValue: string | any, pSeparator?: string): any[];
        /**
         * <p>Compare two arrays and return true if they have the same number of elements and
         * each element of the arrays is strictly equal to each other. Returns false otherwise.
         * This is a shallow comparison.</p>
         * @example
         * <caption>This example returns true.</caption>
         * apex.util.arrayEqual( [1,"two",3], [1, "two", 3] );
         * @example
         * <caption>This example returns false.</caption>
         * apex.util.arrayEqual( [1,"two",3], [1, "two", "3"] );
         * @param pArray1 - The first array.
         * @param pArray2 - The second array.
         * @returns true if a shallow comparison of the array items are equal
         */
        function arrayEqual(pArray1: any[], pArray2: any[]): boolean;
        /**
         * <p>Returns string <code class="prettyprint">pValue</code> with any special HTML characters (&<>"'/)
         * escaped to prevent cross site scripting (XSS) attacks.
         * It provides the same functionality as <code class="prettyprint">sys.htf.escape_sc</code> in PL/SQL.</p>
         *
         * <p>This function should always be used when inserting untrusted data into the DOM.</p>
         * @example
         * <caption>This example appends text to a DOM element where the text comes from a page item called
         *     P1_UNTRUSTED_NAME. Data entered by the user cannot be trusted to not contain malicious markup.</caption>
         * apex.jQuery( "#show_user" ).append( apex.util.escapeHTML( $v("P1_UNTRUSTED_NAME") ) );
         * @param pValue - The string that may contain HTML characters to be escaped.
         * @returns The escaped string.
         */
        function escapeHTML(pValue: string): string;
        /**
         * <p>Returns string <code class="prettyprint">pValue</code> with any CSS meta-characters escaped.
         * Use this function when the value is used in a CSS selector.
         * Whenever possible if a value is going to be used as a selector, constrain the value so
         * that it cannot contain CSS meta-characters making it unnecessary to use this function.</p>
         * @example
         * <caption>This example escapes an element id that contains a (.) period character so that it finds the
         *     element with id = "my.id". Without using this function the selector would have a completely
         *     different meaning.</caption>
         * apex.jQuery( "#" + apex.util.escapeCSS( "my.id" ) );
         * @param pValue - The string that may contain CSS meta-characters to be escaped.
         * @returns The escaped string, or an empty string if pValue is null or undefined.
         */
        function escapeCSS(pValue: string): string;
        /**
         * <p>Return an {@link htmlBuilder} interface.</p>
         */
        function htmlBuilder(): htmlBuilder;
        /**
         * Function that renders a spinning alert to show the user that processing is taking place. Note that the alert is
         * defined as an ARIA alert so that assistive technologies such as screen readers are alerted to the processing status.</p>
         * @example
         * <caption>To show the spinner when processing starts.</caption>
         * var lSpinner$ = apex.util.showSpinner( $( "#container_id" ) );
         * @example
         * <caption>To remove the spinner when processing ends.</caption>
         * lSpinner$.remove();
         * @param [pContainer] - Optional jQuery selector, jQuery, or DOM element identifying the
         *     container within which you want to center the spinner. If not passed, the spinner will be centered on
         *     the whole page. The default is $("body").
         * @param [pOptions] - Optional object with the following properties:
         * @param [pOptions.alert] - Alert text visually hidden, but available to Assistive Technologies.
         *     Defaults to "Processing".
         * @param [pOptions.spinnerClass] - Adds a custom class to the outer SPAN for custom styling.
         * @param [pOptions.fixed] - if true the spinner will be fixed and will not scroll.
         * @returns A jQuery object for the spinner. Use the jQuery remove method when processing is complete.
         */
        function showSpinner(pContainer?: string | jQuery | Element, pOptions?: {
            alert?: string;
            spinnerClass?: string;
            fixed?: boolean;
        }): jQuery;
        /**
         * <p>The delayLinger namespace solves the problem of flashing progress indicators (such as spinners).</p>
         *
         * <p>For processes such as an Ajax request (and subsequent user interface updates) that may take a while
         * it is important to let the user know that something is happening.
         * The problem is that if an async process is quick there is no need for a progress indicator. The user
         * experiences the UI update as instantaneous. Showing and hiding a progress indicator around an async
         * process that lasts a very short time causes a flash of content that the user may not have time to fully perceive.
         * At best this can be a distraction and at worse the user wonders if something is wrong or if they missed something
         * important. Simply delaying the progress indicator doesn't solve the problem because the process
         * could finish a short time after the indicator is shown. The indicator must be shown for at least a short but
         * perceivable amount of time even if the request is already finished.</p>
         *
         * <p>You can use this namespace to help manage the duration of a progress indication such as
         * {@link apex.util.showSpinner} or with any other progress implementation. Many of the Oracle
         * Application Express asynchronous functions such as the ones in the {@link apex.server} namespace
         * already use delayLinger internally so you only need this API for your own custom long running
         * asynchronous processing.</p>
         * @example
         * <caption>This example shows using {@link apex.util.delayLinger.start} and
         *     {@link apex.util.delayLinger.finish} along with {@link apex.util.showSpinner} to show a
         *     progress spinner, only when needed and for long enough to be seen, around a long running asynchronus process
         *     started in function doLongProcess.</caption>
         * var lSpinner$, lPromise;
         * lPromise = doLongProcess();
         * apex.util.delayLinger.start( "main", function() {
         *     lSpinner$ = apex.util.showSpinner( $( "#container_id" ) );
         * } );
         * lPromise.always( function() {
         *     apex.util.delayLinger.finish( "main", function() {
         *         lSpinner$.remove();
         *     } );
         * } );
         */
        namespace delayLinger {
            /**
             * <p>Call this function when a potentially long running async process starts. For each call to start with
             * a given pScopeName a corresponding call to finish with the same <code class="prettyprint">pScopeName</code> must be made.
             * Calls with different <code class="prettyprint">pScopeName</code> arguments will not interfere with each other.</p>
             *
             * <p>Multiple calls to start for the same <code class="prettyprint">pScopeName</code> before any calls to
             * finish is allowed but only the <code class="prettyprint">pAction</code> from the first call is called at most once.</p>
             * @param pScopeName - A unique name for each unique progress indicator.
             * @param pAction - A no argument function to call to display the progress indicator.
             *     This function may or may not be called depending on how quickly finish is called.
             */
            function start(pScopeName: string, pAction: (...params: any[]) => any): void;
            /**
             * <p>Call this function when the potentially long running async process finishes. For each call to start with
             * a given <code class="prettyprint">pScopeName</code> a corresponding call to finish with
             * the same <code class="prettyprint">pScopeName</code> must be made.
             * The <code class="prettyprint">pAction</code> is called exactly once if and only if the corresponding
             * start <code class="prettyprint">pAction</code> was called.
             * If there are multiple calls to finish the <code class="prettyprint">pAction</code> from the last one is called.</p>
             * @param pScopeName - A unique name for each unique progress indicator.
             * @param pAction - A no argument function to call to hide and/or remove the progress indicator.
             *     This function is only called if the action passed to start was called.
             */
            function finish(pScopeName: string, pAction: (...params: any[]) => any): void;
        }
        /**
         * Get a JavaScript Date object corresponding to the input date string which must be in simplified ISO 8601 format.
         * In the future Date.parse could be used but currently there are browsers we support that don't yet support the ISO 8601 format.
         * This implementation is a little stricter about what parts of the date and time can be defaulted. The year, month, and day are
         * always required. The whole time including the T can be omitted but if there is a time it must contain at least the hours
         * and minutes. The only supported time zone is "Z".
         *
         * This function is useful for turning the date strings returned by the
         * <code class="prettyprint">APEX_JSON.STRINGIFY</code> and <code class="prettyprint">APEX_JSON.WRITE</code>
         * procedures that take a DATE value into Date objects that the client can use.
         * @example
         * <caption>This example returns a date object from the date string in result.dateString. For example
         * "1987-01-23T13:05:09.040Z"</caption>
         * var date1 getDateFromISO8601String( result.dateString );
         * @param pDateStr - String representation of a date in simplified ISO 8601 format
         * @returns Date object corresponding to the input date string.
         */
        function getDateFromISO8601String(pDateStr: string): Date;
        /**
         * <p>Gets the system scrollbar size for cases in which the addition or subtraction of a scrollbar
         * height or width would effect the layout of elements on the page. The page need not have a scrollbar on it
         * at the time of this call.</p>
         * @example
         * <caption>The following example returns an object such as <code class="prettyprint">{ width: 17, height: 17 }</code>. Note
         * the actual height and width depends on the Operating System and its various display settings.</caption>
         * var size = apex.util.getScrollbarSize();
         * @returns An object with height and width properties that describe any scrollbar on the page.
         */
        function getScrollbarSize(): any;
        /**
         * <p>Wrapper around requestAnimationFrame that can fallback to <code class="prettyprint">setTimeout</code>.
         * Calls the given function before next browser paint. See also {@link apex.util.cancelInvokeAfterPaint}.</p>
         * <p>See HTML documentation for <code class="prettyprint">window.requestAnimationFrame</code> for details.</p>
         * @example
         * <caption>This example will call the function myAnimationFunction before the next browser repaint.</caption>
         * var id = apex.util.invokeAfterPaint( myAnimationFunction );
         * // ... if needed it can be canceled
         * apex.util.cancelInvokeAfterPaint( id );
         * @param pFunction - function to call after paint
         * @returns id An id that can be passed to {@link apex.util.cancelInvokeAfterPaint}
         */
        function invokeAfterPaint(pFunction: (...params: any[]) => any): any;
        /**
         * <p>Wrapper around cancelAnimationFrame that can fallback to <code class="prettyprint">clearTimeout</code>.
         * Cancels the callback using the id returned from {@link apex.util.invokeAfterPaint}.</p>
         * @example
         * <caption>See example for function {@link apex.util.invokeAfterPaint}</caption>
         * @param pId - The id returned from {@link apex.util.invokeAfterPaint}.
         */
        function cancelInvokeAfterPaint(pId: string): void;
        /**
         * <p>Returns string <code class="prettyprint">pText</code> with all HTML tags removed.</p>
         * @example
         * <caption>This example removes HTML tags from a text string.</caption>
         * apex.util.stripHTML( "Please <a href='www.example.com/ad'>click here</a>" );
         * // result: "Please click here"
         * @param pText - The string that may contain HTML markup that you want removed.
         * @returns The input string with all HTML tags removed.
         */
        function stripHTML(pText: string): string;
        /**
         * <p>Returns the nested object at the given path <code class="prettyprint">pPath</code> within the nested object structure in
         * <code class="prettyprint">pRootObject</code> creating any missing objects along the path as needed.
         * This function is useful when you want to set the value of a property in a deeply
         * nested object structure and one or more of the nested objects may or may not exist.
         * </p>
         * @example
         * <caption>This example sets the value of <code class="prettyprint">options.views.grid.features.cellRangeActions</code>
         * to <code class="prettyprint">false</code>.
         * It works even when the options object does not contain a views.grid.features object or a views.grid object
         * or even a views object.</caption>
         * var o = apex.util.getNestedObject( options, "views.grid.features" );
         * o.cellRangeActions = false; // now options.views.grid.features.cellRangeActions === false
         * @param pRootObject - The root object of a nested object structure.
         * @param pPath - A dot ('.') separated list of properties leading from the root object to the desired object
         *   to return.
         */
        function getNestedObject(pRootObject: any, pPath: string): any;
        /**
         * <p>This function applies data to a template. It processes the template string given in
         * <code class="prettyprint">pTemplate</code> by substituting
         * values according to the options in <code class="prettyprint">pOptions</code>.
         * The template supports Application Express server style placeholder and item substitution syntax.</p>
         *
         * <p>This function is intended to process Application Express style templates in the browser.
         * However it doesn't have access to all the data that the server has. When substituting page items and column
         * items it uses the current value stored in the browser not what is in session state on the server.
         * It does not support the old non-exact substitutions (with no trailing dot e.g. &ITEM). It does not support
         * the old column reference syntax that uses #COLUMN_NAME#. It cannot call
         * <code class="prettyprint">PREPARE_URL</code> (this must be done on the server).
         * Using a template to insert JavaScript into the DOM is not supported.
         * After processing the template all script tags are removed.</p>
         *
         * <p>The format of a template string is any text intermixed with any number of replacement tokens.
         * Two kinds of replacement tokens are supported: placeholders and substitutions.
         * Placeholders are processed first.</p>
         *
         * <p>Placeholder syntax is:</p>
         * <pre class="prettyprint"><code>#&lt;placeholder-name>#
         * </code></pre>
         * <p>The &lt;placeholder-name> is an uppercase alpha numeric plus "_", and "$" string that must be a property
         * name in option object <code class="prettyprint">placeholders</code> that gets replaced with the property value.
         * Any placeholder tokens that don't match anything in the placeholders object are left as is (searching for the
         * next placeholder begins with the trailing # character).</p>
         *
         * <p>Substitution syntax is (any of):</p>
         * <pre class="prettyprint"><code>&&lt;item-name>.
         * &&lt;item-name>!&lt;escape-filter>.
         * &"&lt;quoted-item-name>".
         * &"&lt;quoted-item-name>"!&lt;escape-filter>.
         * &APP_TEXT$&lt;message-key>.
         * &APP_TEXT$&lt;message-key>!&lt;escape-filter>.
         * &"APP_TEXT$&lt;message-key>".
         * &"APP_TEXT$&lt;message-key>"!&lt;escape-filter>.
         * </code></pre>
         *
         * <p>The &lt;item-name> is an uppercase alpha numeric plus "_", "$", and "#" string. The &lt;quoted-item-name>
         * is a string of any characters except "&", carriage return, line feed, and double quote.
         * In both cases the item name is the name of a page item (unless option includePageItems is false),
         * a column item (if model and record options are given), a built-in substitution
         * (unless option includeBuiltinSubstitutions is false), or an extra substitution if option extraSubstitutions
         * is given.</p>
         *
         * <p>The &lt;message-key> is a message key suitable for use in {@link apex.lang.getMessage} and
         * is replaced with the localized message text for the given key. The message must already be loaded on the
         * client by setting the Text Message attribute Used in JavaScript to Yes or otherwise adding it such as with
         * {@link apex.lang.addMessages}.
         * If no replacement for a substitution can be found it is replaced with the message key. The language specifier
         * that is supported for server side message substitutions is not supported by the client and will be ignored
         * if present.</p>
         *
         * <p>When substituting a column item the given record of the given model is used to find a matching column name.
         * If not found and if the model has a parent model then the parent model's columns are checked.
         * This continues as long as there is a parent model. The order to resolve an item name is: page item,
         * column item, column item from ancestor models, built-in substitutions, and finally extra substitutions.
         * Column items support the "_LABEL" suffix to access the defined column label. For example if there is a
         * column item named NOTE the substitution &NOTE_LABEL. will return the label string for column NOTE.</p>
         *
         * <p>The built-in substitution names are:</p>
         * <ul>
         * <li>&APP_ID.</li>
         * <li>&APP_PAGE_ID.</li>
         * <li>&APP_SESSION.</li>
         * <li>&REQUEST.</li>
         * <li>&DEBUG.</li>
         * <li>&IMAGE_PREFIX.</li>
         * </ul>
         *
         * <p>The escape-filter controls how the replacement value is escaped or filtered. It can be one of the following
         * values:</p>
         * <ul>
         * <li>HTML the value will have HTML characters escaped using {@link apex.util.escapeHTML}.</li>
         * <li>ATTR the value will be escaped for an HTML attribute context (currently the same as HTML)</li>
         * <li>RAW does not change the value at all.</li>
         * <li>STRIPHTML the value will have HTML tags removed and HTML characters escaped.</li>
         * </ul>
         * <p>This will override any default escape filter set with option <code class="prettyprint">defaultEscapeFilter</code>
         * or from the column definition <code class="prettyprint">escape</code> property.</p>
         * @example
         * <caption>This example inserts an image tag where the path to the image comes from the built-in
         * IMAGE_PREFIX substitution and a page item called P1_PROFILE_IMAGE_FILE.</caption>
         * apex.jQuery( "#photo" ).html(
         *     apex.util.applyTemplate(
         *         "<img src='&IMAGE_PREFIX.people/&P1_PROFILE_IMAGE_FILE.'>" ) );
         * @example
         * <caption>This example inserts a div with a message where the message text comes from a
         *     placeholder called MESSAGE.</caption>
         * var options = { placeholders: { MESSAGE: "All is well." } };
         * apex.jQuery( "#notification" ).html( apex.util.applyTemplate( "<div>#MESSAGE#</div>", options ) );
         * @param pTemplate - A template string with any number of replacement tokens as described above.
         * @param [pOptions] - An options object with the following properties that specifies how the template
         *     is to be processed:
         * @param [pOptions.placeholders] - An object map of placeholder names to values.  The default is null.
         * @param [pOptions.defaultEscapeFilter] - One of the above escape-filter values. The default is HTML.
         *    This is the escaping/filtering that is done if the substitution token doesn't
         *    specify an escape-filter. If a model column definition has an <code class="prettyprint">escape</code> property
         *    then it will override the default escaping.
         * @param [pOptions.includePageItems] - If true the current value of page items are substituted.
         *     The default is true.
         * @param [pOptions.model] - The model interface used to get column item values. The default is null.
         * @param [pOptions.record] - The record in the model to get column item values from.
         *     Option <code class="prettyprint">model</code> must also be provided. The default is null.
         * @param [pOptions.extraSubstitutions] - An object map of extra substitutions. The default is null.
         * @param [pOptions.includeBuiltinSubstitutions] - If true built-in substitutions such as APP_ID are done.
         *     The default is true.
         * @returns The template string with replacement tokens substituted with data values.
         */
        function applyTemplate(pTemplate: string, pOptions?: {
            placeholders?: any;
            defaultEscapeFilter?: string;
            includePageItems?: boolean;
            model?: model;
            record?: model.Record;
            extraSubstitutions?: any;
            includeBuiltinSubstitutions?: boolean;
        }): string;
    }
}

declare namespace item { }

/**
 * <p>The item interface is used to access methods and properties of an Oracle Application Express item.
 * You get access to the item interface for a page or column item with the {@link apex.item} function.</p>
 *
 * <p>An item interface can apply to either a page item or column item.
 * Page items are items on the page backed by session state in any region.
 * Column items are created by region types such as Interactive Grid that support editable columns.
 * The state of a column item, including its value, changes according to the editing context (active record)
 * of the region and is typically backed by data in an Oracle Application Express {@link model}.</p>
 *
 * <p>Plug-in developers can define the behavior of their item by calling {@link apex.item.create}.</p>
 */
declare interface item {
    /**
     * <p>The DOM element that best represents the value of the Oracle Application Express item. If the item doesn't exist
     * then the value is false.</p>
     * @example
     * <caption>The following code checks if the Oracle Application Express item
     * P1_OPTIONAL_ITEM exists before setting its value. Use code similar to this
     * if there is a possibility of the item not existing.</caption>
     * var item = apex.item( "P1_OPTIONAL_ITEM" );
     * if ( item.node ) {
     *     item.setValue( newValue );
     * }
     */
    node: Element | false;
    /**
     * <p>The id of the DOM element of the item. If the item doesn't exist then the value is false.</p>
     */
    id: string | false;
    /**
     * <p>Returns the current value of an Oracle Application Express item. The initial value of a page item comes from
     * session state when the server renders the page. The initial value of a column item comes from the
     * corresponding field value of the active record of the Oracle Application Express {@link model}. This function
     * always returns the current value of the item, which may have been changed by the user or with the {@link item#setValue}
     * method since it was initialized.</p>
     *
     * <p>There are two shorthand functions related to getValue. The {@link $v} function that returns an item's value in the string format
     * it will be sent to the server. This will either be a single value, or if the item supports multiple values, will be
     * a ':' colon separated list of values. The {@link $v2} function, which is just a shortcut
     * to getValue and returns either a single value, or an array of values. See also {@link item#setValue}.</p>
     * @example
     * <caption>In this example, the current value of the page item called P1_ITEM will be shown in an alert.</caption>
     * apex.message.alert( "P1_ITEM value = " + apex.item( "P1_ITEM" ).getValue() );
     * @returns Returns either a single string value or array of string values if the item
     * supports multiple values (for example the 'Select List' with attribute 'Allow Multi Selection' set to ' Yes'
     * or 'Shuttle' native item types).
     */
    getValue(): string | any[];
    /**
     * <p>Sets the Oracle Application Express item value. This function sets the current value of the
     * item. For page items the session state is not affected until the page is submitted (or the item
     * is explicitly saved to the server using ajax or a dynamic action). For column items the region
     * such as Interactive Grid takes care of writing the value back to the Oracle Application Express {@link model}
     * when appropriate.</p>
     *
     * <p>Normally a change event is explicitly triggered on the item node when the value is set. This allows
     * cascading LOV functionality and dynamic action change events to work.
     * The caller may suppress the change event for the item being set, if needed. The change event should be
     * suppressed when the value is set while processing a change event triggered on the same item, to prevent
     * an infinite loop. The {@link grid} widget relies on the change event to update the model. If you suppress
     * the change event on a column item you may need to call the {@link grid#setActiveRecordValue} method.</p>
     *
     * <p>There is a shorthand function for setValue {@link $s}. See also {@link item#getValue}.</p>
     * @example
     * <caption>In this example, the value of the page item called P1_ITEM will be set to 10.
     * As <code class="prettyprint">pSuppressChangeEvent</code> has not been passed, the default behavior of the
     * <code class="prettyprint">change</code> event triggering for P1_ITEM will occur.</caption>
     * apex.item( "P1_ITEM" ).setValue( "10" );
     * @example
     * <caption>In this example, P1_ITEM is a Popup LOV page item with distinct display and return values.
     * The display value of P1_ITEM will be set to SALES, and the hidden return value will be set to 10.
     * As true has been passed for the <code class="prettyprint">pSuppressChangeEvent</code> parameter,
     * the <code class="prettyprint">change</code> event will not trigger for the P1_ITEM item.</caption>
     * apex.item( "P1_ITEM" ).setValue( "10", "SALES", true );
     * @example
     * <caption>This example shows how to suppress the change event when there is no display value.</caption>
     * apex.item( "P1_ITEM" ).setValue( "10", null, true );
     * @param pValue - The value to set. For items that support multiple values (for example a
     * 'Shuttle'), an array of string values can be passed to set multiple values at once.
     * @param [pDisplayValue] - The display value, only if different from pValue and can't be determined by the item itself.
     *   For example, for the item type [TODO update info on popup lov] Popup LOV, with the attribute Input Field =
     *   'Not Enterable, Show Display Value and Store Return Value', this value sets the Input Field display value.
     *   The value of pValue is used to set the item's hidden return field.
     * @param [pSuppressChangeEvent] - Pass true to prevent the change event from being triggered
     *   for the item being set. The default is false.
     */
    setValue(pValue: string | string[], pDisplayValue?: string, pSuppressChangeEvent?: boolean): void;
    /**
     * <p>Enables the Oracle Application Express item value that has been disabled, making it available for editing.
     * Not all items support being disabled. This only applies to items that can be edited.
     * See also {@link item#disable}.</p>
     * @example
     * <caption>In this example, the page item called P1_ITEM will be enabled and available for edit.</caption>
     * apex.item( "P1_ITEM" ).enable();
     */
    enable(): void;
    /**
     * <p>Disables the Oracle Application Express item, making it unavailable for editing.
     * Not all items support being disabled. This only applies to items that can be edited. See also {@link item#enable}.</p>
     * @example
     * <caption>In this example, the page item named P1_ITEM will be disabled and unavailable for editing.</caption>
     * apex.item( "P1_ITEM" ).disable();
     */
    disable(): void;
    /**
     * Returns the disabled state of an item.
     * @example
     * <caption>This example gets the value of an item, but only if it is not disabled.</caption>
     * var value = null;
     * if ( !apex.item( "P1_ITEM" ).isDisabled() ) {
     *     value = apex.item( "P1_ITEM" ).getValue();
     * }
     * @returns true if the item is disabled and false otherwise.
     */
    isDisabled(): boolean;
    /**
     * <p>Shows the Oracle Application Express item. When using the show function, it is important to understand the following:</p>
     * <ul>
     * <li>If the item being shown is rendered on a page using table layout (meaning the page references a page
     * template with Grid Layout Type set to 'HTML Table'), and the call to show has specified to show the entire
     * table row (<code class="prettyprint">pShowRow</code> = true), then it is assumed that everything pertaining to the item is contained in that
     * row, and the entire row will be shown.</li>
     * <li>If the item being shown is rendered on a page using table layout, and the call to show has specified
     * not to show the entire table row (<code class="prettyprint">pShowRow</code> = false, or not passed), then the function will attempt to show
     * the item's label, where the <code class="prettyprint">for</code> attribute matches the <code class="prettyprint">id</code> of the item.</li>
     * <li>If the item being shown is rendered on a page using grid layout (meaning the page references a page
     * template with Grid Layout Type set to either 'Fixed Number of Columns', or 'Variable Number of Columns'),
     * and the item references a Label template that includes a Field Container element with a known <code class="prettyprint">id</code>
     * (so where the Field Container > Before Label and Item attribute includes an HTML element with
     * id="#CURRENT_ITEM_CONTAINER_ID#"), then it is assumed that everything pertaining to the item is contained
     * in the Field Container, and this will be shown.</li>
     * <li>If the item is a column item then just the column value is shown. The exact behavior depends on the
     * type of region. For example, in Interactive Grid just the cell content is shown not the whole column.</li>
     * </ul>
     * <p>See also {@link item#hide}.</p>
     * @example
     * <caption>In this example, the page item called P1_ITEM will be shown.
     * If P1_ITEM is on a page using grid layout and the item references a Label template that includes a Field
     * Container element with a known ID (as detailed above), then that container element will be shown.
     * Otherwise just the item and its corresponding label will be shown.</caption>
     * apex.item( "P1_ITEM" ).show();
     * @example
     * <caption>In this example, the page item called P1_ITEM's nearest containing table row (TR) will be shown
     * (as pShowRow = true). Showing the entire table row should only be used on a page using table layout.
     * If P1_ITEM is on a page using grid layout, then passing pShowRow = true will not work and could result
     * in adverse consequence for the page layout, where an incorrect table row is wrongly shown.</caption>
     * apex.item( "P1_ITEM" ).show( true );
     * @param [pShowRow] - This parameter is optional. The default if not specified is false. If true,
     * shows the nearest containing table row (TR). This parameter is not supported for column items.
     * Its behavior is undefined. Only applicable when item is on a page using table layout
     * (meaning the page references a page template with Grid Layout Type set to 'HTML Table').
     */
    show(pShowRow?: boolean): void;
    /**
     * <p>Hides the Oracle Application Express item. When using the hide function, it is important to understand the following:</p>
     * <ul>
     * <li>If the item being hidden is rendered on a page using table layout (meaning the page references a page
     * template with Grid Layout Type set to 'HTML Table'), and the call to hide has specified to hide the entire
     * table row (<code class="prettyprint">pHideRow</code> = true), then it is assumed that everything pertaining to the item is contained in that
     * row, and the entire row will be hidden.</li>
     * <li>If the item being hidden is rendered on a page using table layout, and the call to hide has specified
     * not to hide the entire table row (<code class="prettyprint">pHideRow</code> = false, or not passed), then the function will attempt to hide
     * the item's label, where the <code class="prettyprint">for</code> attribute matches the <code class="prettyprint">id</code> of the item.</li>
     * <li>If the item being hidden is rendered on a page using grid layout (meaning the page references a page
     * template with Grid Layout Type set to either 'Fixed Number of Columns', or 'Variable Number of Columns'),
     * and the item references a Label template that includes a Field Container element with a known <code class="prettyprint">id</code>
     * (so where the Field Container > Before Label and Item attribute includes an HTML element with id="#CURRENT_ITEM_CONTAINER_ID#"),
     * then it is assumed that everything pertaining to the item is contained in the Field Container, and this
     * will be hidden.</li>
     * <li>If the item is a column item then just the column value is hidden. The exact behavior depends on the
     * type of region. For example in Interactive Grid just the cell content is hidden not the whole column.</li>
     * </ul>
     * <p>See also {@link item#show}.</p>
     * @example
     * <caption>In this example, the page item called P1_ITEM will be hidden.
     * If P1_ITEM is on a page using grid layout and the item references a Label template that includes a
     * Field Container element with a known ID (as detailed above), then that container element will be hidden.
     * Otherwise just the item and its corresponding label will be hidden.</caption>
     * apex.item( "P1_ITEM" ).hide();
     * @example
     * <caption>In this example, the page item called P1_ITEM's nearest containing table row (TR) will
     * be hidden (as pHideRow = true). Hiding the entire table row should only be used on a page using
     * table layout. If P1_ITEM is on a page using grid layout, then passing pHideRow = true will not work and
     * could result in adverse consequence for the page layout, where an incorrect table row is wrongly hidden.</caption>
     * apex.item( "P1_ITEM" ).hide( true );
     * @param [pHideRow] - This parameter is optional. The default value is false. If true, hides the
     * nearest containing table row (TR). This parameter is not supported for column items.
     * Its behavior is undefined. Only applicable when item is on a page using table layout (meaning the
     * page references a page template with Grid Layout Type set to 'HTML Table').
     */
    hide(pHideRow?: boolean): void;
    /**
     * Returns true or false if an Oracle Application Express item is empty and considers any item value consisting of
     * only whitespace including space, tab, or form-feed, as empty.
     * This also respects if the item type uses a List of Values, and a 'Null Return Value' has been defined in the List
     * of Values. In that case, the 'Null Return Value' is used to assert if the item is empty.
     * @example
     * <caption>In this example, the call to .isEmpty() determines if the page item called
     * P1_ITEM is empty, and if so displays an alert.</caption>
     * if ( apex.item( "P1_ITEM" ).isEmpty() ) {
     *     apex.message.alert( "P1_ITEM empty!" );
     * }
     * @returns true if the Oracle Application Express item is empty and false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Determine if the value of this item has changed since it was first initialized.
     * Return true if the current value of the Oracle Application Express item has changed and false otherwise.
     * Developers rarely have a need to call this function. It is used internally by the Warn on Unsaved Changes feature.
     * Item Plug-in developers should ensure this function works so that the Warn on Unsaved Changes
     * feature can support their plug-in.
     * @example
     * <caption>The following example determines if the value of item P1_ITEM has been changed.</caption>
     * if ( apex.item( "P1_ITEM" ).isChanged() ) {
     *     // do something
     * }
     * @returns true if the item value has changed and false otherwise.
     */
    isChanged(): boolean;
    /**
     * <p>Adds the given value to the current list of values of an item that supports multiple values.
     * Not all multi-valued items support this method.</p>
     * @example
     * <caption>In this example, the page item called P1_ITEM will have the value 100 added to the
     * current list of values.</caption>
     * apex.item( "P1_ITEM" ).addValue( "100" );
     * @param pValue - The value to be added.
     * @param [pDisplayValue] - The display value, only if different from pValue and can't be determined by
     *   the item itself. Not all multi-valued items that support addValue will support this parameter.
     */
    addValue(pValue: string, pDisplayValue?: string): void;
    /**
     * <p>Removes the given value from the current list of values of an item that supports multiple values.
     * Not all multi-valued items support this method.</p>
     * @example
     * <caption>In this example, the page item called P1_ITEM will have the value 100 removed from the
     * current list of values.</caption>
     * apex.item( "P1_ITEM" ).removeValue( "100" );
     * @param [pValue] - The value to be removed. The behavior when no value is given is item specific.
     *   For example it may remove the currently selected or focused item or items or may do nothing at all.
     */
    removeValue(pValue?: string): void;
    /**
     * <p>Call to refresh the item. What it means for an item to be refreshed depends on the item. Not all items
     * support refresh. Typically an item such as a select list that has a list of options will refresh the
     * available options from the server. In most cases it is not necessary to call this method directly because
     * the declarative Cascading LOV Parent Items takes care of it automatically.</p>
     * @example
     * <caption>The following example will cause the P1_ITEM select list page item to fetch its options from the server.</caption>
     * apex.item( "P1_ITEM" ).refresh();
     */
    refresh(): void;
    /**
     * <p>Places user focus on the Oracle Application Express item, taking into account how specific items are designed to receive focus.</p>
     * @example
     * <caption>In this example, user focus is set to the page item named P1_ITEM.</caption>
     * apex.item( "P1_ITEM" ).setFocus();
     */
    setFocus(): void;
    /**
     * <p>Sets a style for the Oracle Application Express item, taking into account how specific items are
     * designed to be styled.</p>
     *
     * <p class="important">Note: Using setStyle is not a best practice. It is better to add or remove CSS classes
     * and use CSS rules to control the style of items. Also keep in mind that the exact markup of native and plug-in items can
     * change from one release to the next.</p>
     * @example
     * <caption>In this example, the CSS property color will be set to red for the page item called P1_ITEM.</caption>
     * apex.item( "P1_ITEM" ).setStyle( "color", "red" );
     * @param pPropertyName - The CSS property name that will be set.
     * @param pPropertyValue - The value used to set the CSS property.
     */
    setStyle(pPropertyName: string, pPropertyValue: string): void;
    /**
     * <p>Returns the display value corresponding to the value given by pValue for the Oracle Application Express item.
     * This method is intended for items that have both a value and display value, such as select lists.</p>
     * <p>If the item type does not have a display value distinct from the value then <code class="prettyprint">pValue</code> is returned;
     * meaning that the value is the display value. For item types that have a display value but don't have access
     * to all possible values and display values then this function only works when <code class="prettyprint">pValue</code> is the current value of the item.
     * For the native items, this only applies to item type Popup LOV.
     * For item types such as select lists that have access to all their values, if <code class="prettyprint">pValue</code>
     * is not a valid value then <code class="prettyprint">pValue</code> is returned.</p>
     * @example
     * <caption>This example gets a display value from a select list item called P1_ITEM and displays
     * it in an alert.</caption>
     * apex.message.alert( "The correct answer is: " + apex.item( "P1_ITEM" ).displayValueFor( "APPLES" ) );
     * @param pValue - The value to return the corresponding display value.
     * @returns The string display value corresponding to the given
     *     <code class="prettyprint">pValue</code> as described above.
     */
    displayValueFor(pValue: string): string;
    /**
     * <p>Return a ValidityState object as defined by the HTML5 constraint validation API for the
     * Oracle Application Express item. If a plug-in item implements its own validation then the object may not contain
     * all the fields defined by HTML5. At a minimum it must have the valid property. If the item doesn't support
     * HTML5 validation then it is assumed to be valid.</p>
     *
     * <p>This function does not actually validate the item value. For many item types the browser can do the
     * validation automatically if you add HTML5 constraint attributes such as pattern. Validation can be done
     * using the HTML5 constraint validation API.</p>
     *
     * <p>Developers rarely have a need to call this function. It is used internally by the client side validation
     * feature. Item plug-in developers should ensure this function works with their plug-in.</p>
     * @example
     * <caption>The following example displays a message in an alert dialog if the item called P1_ITEM is not valid.</caption>
     * var item = apex.item( "P1_ITEM" );
     * if ( !item.getValidity().valid ) {
     *     apex.message.alert( "Error: " + item.getValidationMessage() );
     * }
     * @returns A ValidityState object as described above.
     */
    getValidity(): any;
    /**
     * <p>Return a validation message if the Oracle Application Express item is not valid and empty string otherwise.</p>
     *
     * <p>The message comes from the element's validationMessage property. An APEX extension allows specifying a
     * custom message, which overrides the element's validationMessage, by adding a custom attribute named
     * data-valid-message. If the item has this attribute then its value is returned if the item is not valid.
     * As the name implies, the text of the message should describe what is expected of valid input, rather than
     * what went wrong.</p>
     * @example
     * <caption>See the example for {@link item#getValidity} for an example of this function.</caption>
     * @returns A validation message, if the item is not valid and empty string otherwise.
     */
    getValidationMessage(): string;
}

declare namespace model {
    /**
     * This callback is used by the {@link model#forEach} and {@link model#forEachInPage} methods.
     * @param pRecord - The current record.
     * @param pIndex - The zero based index within the model collection of the current record.
     * @param pId - The identity of the current record if the model
     *   <code class="prettyprint">identityField</code> option is given. If there is no identity then this is
     *   undefined for tree models and is the <code class="prettyprint">pIndex</code> as a string for table models.
     */
    type IteratorCallback = (pRecord: model.record, pIndex: number, pId: string) => void;
    /**
     * Metadata properties that the model creates and uses.
     * @property deleted - true if the record has been deleted otherwise false or undefined.
     * @property inserted - true if the record is newly created and inserted/added to the collection otherwise false or undefined.
     * @property autoInserted - true if the record was auto inserted (these records are not saved if not also updated)
     * @property updated - true if the record has had any fields changed.
     * @property original - When updated is true this is the original record before any changes.
     * @property record - Reference to the record that this metadata is about.
     * @property parent - The parent record of this record. Only applies to tree shape models.
     * @property error - true if the record as a whole has an error.
     * @property warning - true if the record as a whole has a warning.
     * @property message - Only present when <code class="prettyprint">error</code>
     *     or <code class="prettyprint">warning</code> are true. Describes the error or warning condition.
     * @property sel - true if the record is selected and false otherwise.
     * @property highlight - A string that view layers can use to provide extra styling for the record.
     * @property allowedOperations.delete - true if the record can be deleted.
     * @property allowedOperations.update - true if the record can be updated.
     * @property canEdit - Derived from <code class="prettyprint">allowedOperations.update</code>
     * @property canDelete - Derived from <code class="prettyprint">allowedOperations.delete</code>
     * @property endControlBreak - Used by views to implement control break UI.
     * @property agg - For aggregate records this is truthy.
     * @property fields - An object that maps from a field name to
     *     metadata about the field.
     */
    type RecordMetadata = {
        deleted: boolean;
        inserted: boolean;
        autoInserted: boolean;
        updated: boolean;
        original: model.Record;
        record: model.Record;
        parent: model.Record;
        error: boolean;
        warning: boolean;
        message: string;
        sel: boolean;
        highlight: string;
        allowedOperations: {
            delete: boolean;
            update: boolean;
        };
        canEdit: boolean;
        canDelete: boolean;
        endControlBreak: boolean;
        agg: any;
        fields: {
            [key: string]: model.RecordFieldMetadata;
        };
    };
    /**
     * Metadata related to a specific record field.
     * @property error - true if the field has an error.
     * @property warning - true if the field has a warning.
     * @property message - Only present when <code class="prettyprint">error</code>
     *     or <code class="prettyprint">warning</code> are true. Describes the error or warning condition.
     * @property disabled - true if the field is disabled. Disabled fields are written to the server as empty string.
     * @property highlight - A string that view layers can use to provide extra styling for the field.
     * @property ck - A checksum. If present and not null indicates the record field is readonly.
     * @property url - Use for cells that are links. This is the link target. The cell value is the link label.
     */
    type RecordFieldMetadata = {
        error: boolean;
        warning: boolean;
        message: string;
        disabled: boolean;
        highlight: string;
        ck: string;
        url: string;
    };
    /**
     * <p>Information about an observer for subscribing to this model. See {@link model#subscribe} and
     * {@link model#unSubscribe}.</p>
     * @property [viewId] - A unique key that can be used to unsubscribe.
     *     A DOM element id makes a good unique key.
     * @property onChange - A function to receive change notifications. The signature is
     *     <code class="prettyprint">function(changeType, change)</code><br>
     *     <code class="prettyprint">changeType</code> is a string describing the change such as "delete"<br>
     *     <code class="prettyprint">change</code> is an object with details about the change.<br>
     *     See each notification for details.
     * @property [progressView] - jQuery object to center a progress spinner over while performing an
     *     asynchronous network operation such as {@link model#fetch} or {@link model#save}.
     * @property [progressOptions] - Options object for {@link apex.util.showSpinner}.
     */
    type Observer = {
        viewId?: string;
        onChange: (...params: any[]) => any;
        progressView?: jQuery;
        progressOptions?: any;
    };
    /**
     * <p>A model is uniquely identified by a string name and optional string instance id. The instance id is used to
     * support multiple detail models in a master detail arrangement. The instance id is the identity value of the
     * record in the master model for which the detail model pertains. The form for a model id is "name" or a
     * tuple array ["name","instance"]</p>
     * @example
     * <caption>A model with no instance.</caption>
     * "MyModel"
     * @example
     * <caption>A detail model with instance id "000109".</caption>
     * ["MyDetailModel", "000109"]
     */
    type ModelId = string | any[];
    /**
     * A model record is either an array or an object depending on the model option <code class="prettyprint">recordIsArray</code>.
     */
    type Record = any[] | any;
    /**
     * A model node is a synonym for {@link model.Record} that is more naturally used when the model has a tree shape.
     */
    type Node = any[] | any;
    /**
     * The field metadata describes the field and affects how the model uses the field. It may contain additional
     * properties especially if the metadata is shared with view layers.
     * @property index - Only used when records are arrays. This is the index into the array where the field
     *   value is stored.
     * @property defaultValue - This value is used when a new record is added or an existing record is duplicated and noCopy is true.
     *   The defaultValue has no effect for the identity, meta, children, and parent fields if defined.
     *   If there is no defaultValue empty string is used.
     * @property parentField - Only applies if the model has a parentModel. When a new record is added or an existing record is
     *   duplicated and noCopy is true the value of this field is taken from the parentField of the parentModel
     *   This is useful for foreign key fields but can be any field that gets a default from the parentModel.
     * @property noCopy - If true the field value is not copied when a record is copied/duplicated.
     * @property readonly - If true the field cannot be edited.
     * @property volatile - The field is generated by the server. It cannot be edited. It is not sent back to the server. This means
     *   that for records stored as arrays the volatile fields should be at the end or the server must account
     *   for the missing volatile fields when using other field's index. Volatile fields may depend on (are calculated
     *   from) other fields and the value may be considered stale if the record is edited. It is up to the view
     *   layers to make this determination.
     * @property virtual - A virtual field has no associated data. None of the other properties apply. The main purpose for
     *   including a virtual field is so that view layers and the model can share the same field metadata.
     *   This allows view layers to have fields that don't have corresponding data in the model.
     */
    type FieldMeta = {
        index: string;
        defaultValue: any;
        parentField: string;
        noCopy: boolean;
        readonly: boolean;
        volatile: boolean;
        virtual: boolean;
    };
    /**
     * <p>A callback function to do additional access checking. See the <code class="prettyprint">check</code>
     * option property of {@link apex.model.create} and the {@link model#check} method.</p>
     * @param pResult - The result of the access checking so far.
     * @param pOperation - One of the default checks ("canEdit", "canDelete", "canAdd", "canDrag") or a custom
     *   operation.
     * @param pRecord - The record to check if action is allowed on it.
     * @param [pAddAction] - Only used by allowAdd see {@link model#allowAdd} for details.
     * @param [pRecordsToAdd] - Only used by allowAdd see {@link model#allowAdd} for details.
     */
    type CheckCallback = (pResult: boolean, pOperation: string, pRecord: model.Record, pAddAction?: string, pRecordsToAdd?: model.Record[]) => boolean;
}

/**
 * <p>A model holds data in memory for use by the UI layer. It corresponds to the view-model in the Model-View-ViewModel
 * (MVVM) pattern. The UI can both read and write the data.
 * A model can notify interested parties (subscribers) when the data changes. The data comes (is fetched) from
 * the server and updates can be written back (saved) to the server.</p>
 *
 * <p>Models are created and managed with functions of the {@link apex.model} namespace.
 * A model is uniquely identified by a {@link model.ModelId}, which is a string name and optional string instance id.</p>
 *
 * <p>A model can hold data of different shapes. They are:</p>
 * <ul>
 * <li>table: The data is an ordered collection of records. In database or UI terms the record might be called a row.
 *    See {@link model.Record}.</li>
 * <li>tree: The data is a single root record and each record including the root can have an ordered collection of
 *    any number of child records. When dealing with trees it is common to call the records nodes. See {@link model.Node}.</li>
 * <li>record: The data is a single record. In some cases this is treated as a collection of one.</li>
 * </ul>
 *
 * <p>Each record can have any number of named fields. See {@link model.Record}. All records in the collection must have
 * the same set of fields although the value of some fields may be null. In database or UI terms the fields
 * might be called columns. The actual storage of a record could be an object or an array. If records are objects then the
 * fields of the record are the properties of the object. If the records are arrays the fields of the record are
 * elements of the array and the {@link model.FieldMeta} <code class="prettyprint">index</code> property is used to
 * map from the field name to the record array index.</p>
 *
 * <p>The model has very few restrictions on the values of fields and doesn't know the data type of the field.
 * However typically when the model data is backing APEX items or HTML form controls the values will all be strings.
 * The model optionally uses the following fields for specific purposes:</p>
 * <ul>
 * <li>identity: A string value that uniquely identifies the record. There can be multiple identity fields.
 *      Required for editable models. See {@link apex.model.create} option <code class="prettyprint">identityField</code>.</li>
 * <li>meta: An object with additional metadata about the record. See {@link apex.model.create} option <code class="prettyprint">metaField</code>.</li>
 * <li>children: (tree shape only) An array of the child records (nodes). See {@link apex.model.create} option <code class="prettyprint">childrenField</code>.</li>
 * <li>parent identity: (tree shape only) A string value that identifies the parent record (node) of this record (node).
 *      Required for editable tree shaped models. See {@link apex.model.create} option <code class="prettyprint">parentIdentityField</code>.</li>
 * </ul>
 *
 * <p>Another special case is for field values that have a display value in addition to their intrinsic value. These
 * composite values have the form: <code class="prettyprint">{ d: "<i>display value</i>", v: <i>value</i> }</code>
 * When comparing values during {@link model#setValue} only the value is considered not the display value.
 * Also when the changes are saved to the server just the value is included without being wrapped
 * in an object. Other special fields such as identity or parent etc. cannot have this structure.</p>
 *
 * <h3>Aggregations:</h3>
 * <p>Aggregations are just rows that the server includes in order among all the other rows marked with meta data
 * property <code class="prettyprint">agg: true</code>. The aggregate record has most fields empty except for the
 * aggregate fields that contain the aggregate value.</p>
 * @example
 * <caption>Models are typically used by advanced widgets to display, interact with, and edit data.
 * The following is a high level sketch of how a widget might use a table shape model. Much of the work in
 * interfacing with a model is handled by {@link tableModelViewBase} so deriving a widget from that
 * base widget can save time and effort.</caption>
 * // The widget can create the model during widget initialization
 * this.model = apex.model.create( modelName, options, initialData, ... );
 *
 * // Or it can be configured with the name of a model that already exists and get a reference to it
 * this.model = apex.model.get( modelName );
 *
 * // In either case subscribe to model notifications
 * this.modelViewId = this.model.subscribe( {
 *     onChange: modelNotificationFunction,
 * } );
 *
 * // During create or when the widget is refreshed it should render data from the model
 * // this.pageOffset starts a 0. When the user changes pages or additional page data is needed run this code again
 * // the model fetches more data from the server as needed.
 * var count = 0;
 * this.model.forEachInPage( this.pageOffset, pageSize, function( record, index, id ) {
 *     if ( record ) {
 *         // render the row record
 *         count += 1;
 *     }
 *     if ( count === pageSize || !record ) {
 *         // done rendering this page of records
 *     }
 * } );
 *
 * // When settings change that affect the data such as changing the sort order or applying a filter
 * // the new sort order or filter information can be communicated to the server in the model fetchData or
 * // regionData option or it can be sent in a separate Ajax request.
 * this.model.clearData();
 *
 * // Clearing the data will result in a refresh notification. The modelNotificationFunction should
 * this.pageOffset = 0;
 * // call the above forEachInPage code to fetch and render the new data.
 *
 * // When the widget is destroyed it needs to release the model
 * this.model.unSubscribe( this.modelViewId );
 * this.model.release( modelName );
 */
declare interface model {
    /**
     * Return the model id for this model.
     */
    modelId(): model.ModelId;
    /**
     * <p>Retrieve model data from the server. Data is requested starting at the given offset (or 0 if offset is
     * not given). Data is fetched in model option <code class="prettyprint">pageSize</code> chunks.
     * Can use either the callback argument or the returned promise to determine when the request is complete.</p>
     * @param [pOffset] - Zero based offset of the data to fetch. Only applies to table shape
     *                           models. This is rarely needed because table data is automatically fetched as
     *                           needed when requested via the {@link model#forEachInPage} method.
     *                           Omit this param when not needed.
     * @param [pCallback] - A function to call when the request is complete. The callback is passed an
     *                           Error argument only if there is an error.
     * @param [pNoProgress] - Set to true to not show progress during the fetch.
     * @returns A promise if the fetch is initiated, null if there is already a fetch in progress,
     * and false if <code class="prettyprint">pOffset</code> is beyond the end of the data or master record is
     * inserted or deleted. If and only if a promise is returned, <code class="prettyprint">pCallback</code> will be called.
     * It receives no arguments when resolved and an <code class="prettyprint">Error</code> argument when rejected.
     */
    fetch(pOffset?: number, pCallback?: (...params: any[]) => any, pNoProgress?: boolean): promise;
    /**
     * <p>Fetch all the data from the server into the model. This repeatedly calls {@link model#fetch} until the server reports
     * there is no more data. This is only for table shape models.
     * Data is fetched in model option <code class="prettyprint">pageSize</code> chunks.</p>
     * <p>Use with caution. Loading too much data onto the client can take a long time and cause the browser to
     * become unresponsive.</p>
     * @example
     * <caption>This example fetches all the data before using {@link model#forEach} to loop over the records.</caption>
     * model.fetchAll( function( status ) {
     *     if ( status.done } {
     *         model.forEach( function( record, index, id ) {
     *             // do something with each record
     *         }
     *     }
     * } );
     * @param pCallback - function that is called after each fetch completes. It receives an object with properties:
     * <ul>
     *   <li>offset: the current offset in the model that was just added</li>
     *   <li>total: total records in the model (see {@link model#getTotalRecords})</li>
     *   <li>done: true if all the data is fetched false otherwise. When true this is the last time the callback is called.</li>
     * </ul>
     */
    fetchAll(pCallback: (...params: any[]) => any): void;
    /**
     * <p>Fetches fresh data from the server for the given records. The existing records in the model are replaced
     * with the new returned record from the server. The model must have a <code class="prettyprint">identityField</code>
     * option defined for this to work.
     * Can use either the callback argument or the returned promise to determine when the request is complete.</p>
     * @example
     * <caption>This example fetches the selected records from interactive grid with static id "emp".
     * There is often no need know when the Ajax request completes because the view is updated from model
     * notifications.</caption>
     * var model = apex.region( "emp" ).call( "getCurrentView" );
     * model.fetchRecords( apex.region( "emp" ).call( "getSelectedRecords" );
     * @param pRecords - Array of records to be fetched.
     * @param [pCallback] - A function to call when the request is complete. The callback is passed an
     *  Error argument only if there is an error.
     * @returns A promise that receives no arguments when resolved and an Error argument when rejected.
     *  If there are no records to fetch then null is returned and <code class="prettyprint">pCallback</code> is not called.
     */
    fetchRecords(pRecords: model.Record, pCallback?: (...params: any[]) => any): promise;
    /**
     * <p>Save all changed model data to the server. The current changes are copied to the save request except
     * that volatile fields are not included (they are omitted/deleted i.e. not null or undefined) and the metadata
     * has the <code class="prettyprint">op</code> property added with value "d" if the record was deleted,
     * "i" if the record was inserted, and "u" if the record was updated.
     * If the record has no metadata field defined then one is added. For array
     * records it is the last element, for object records it is property <code class="prettyprint">_meta</code>.</p>
     *
     * <p>It is possible to continue making changes to the model while a save is in progress.
     * Can use either the callback argument or the returned promise to determine when the request is complete.</p>
     *
     * <p>See also {@link apex.model.save}.</p>
     * @param [pCallback] - A function to call when the save request is complete.
     *                           callback( error, responseData );
     *                           The callback is passed an Error argument or array of server errors only
     *                           if there is an error. Otherwise error is null.
     * @returns A promise if the save is initiated and null otherwise (there is already a save in progress or
     * there is nothing to save). If and only if a promise is returned, pCallback will be called. The promise receives no
     * arguments when resolved and an Error argument when rejected.
     */
    save(pCallback?: (...params: any[]) => any): promise;
    /**
     * Rarely needed. Only useful if making your own call to the server.
     * See {@link model#save}, {@link apex.model.addChangesToSaveRequest}, and {@link apex.model.save}.
     * @param pRequestData - An empty or partially filled in object to which changes for this model will be added.
     */
    addChangesToSaveRequest(pRequestData: any): void;
    /**
     * <p>Give the model data. This is used in cases where the model doesn't get data from the server or at least
     * not using the built in mechanisms.</p>
     * @param pData - Model data to set.
     * @param [pOffset] - Offset at which to add the data.
     */
    setData(pData: any[], pOffset?: number): void;
    /**
     * <p>Remove all data from the model.</p>
     */
    clearData(): void;
    /**
     * <p>Returns the total number of records in the model collection or -1 if unknown.</p>
     *
     * <p>For table shape models the total number of records may not be known or it may be an estimate.
     * If the pagination type is "none" then the total records is known and it is the same as what is in the collection.
     * If the pagination type is "progressive" and the model has paged to the end (all pages
     * have been received and the server has said there is no more) then the total records is known and it
     * is the same as what is in the collection (which could be different from what is actually on the server).
     * If the server has told the model how many records it has then that is returned. This is an estimate of what
     * the client model may eventually hold. This value may change as new pages are fetched.
     * If the server has not told the model how many records it has then the total is unknown.
     * </p>
     * <p>For tree shape models the total number of records is not often needed.
     * It is also not readily available so the nodes must be counted. The total doesn't include nodes that
     * have not yet been fetched and never returns -1 (unknown) even if there are nodes that haven't been fetched.
     * </p>
     * <p>For record shape the number is always 1.</p>
     *
     * <p>Note: Includes records that are marked for delete in the count.
     * Also includes aggregate records if any in the count.</p>
     * @returns The number of records or -1 if unknown.
     */
    getTotalRecords(): number;
    /**
     * <p>Returns the total number of records from the server's perspective or -1 if unknown.</p>
     *
     * <p>For table shape models the server provides the total but for editable grids the number of inserted records
     * is added and the number of deleted records subtracted. This is so the number reflects what is likely
     * to be on the server after changes are saved.</p>
     *
     * <p>For tree shape models this is not supported; returns -1.</p>
     *
     * <p>For record shape models the number is always 1.</p>
     *
     * <p>Note: Aggregate records are never included.</p>
     * @returns The number of records or -1 if unknown.
     */
    getServerTotalRecords(): number;
    /**
     * <p>Iterate over the model collection. Calls <code class="prettyprint">pCallback</code> for each record in the model.
     * Similar to <code class="prettyprint">Array.prototype.forEach</code>. The model shape must be table or tree.
     * This will never fetch new data. This includes aggregate records if any.
     * For shape tree see also {@link model#walkTree}.</p>
     *
     * <p>The callback receives the record, the zero based index of the record, and the identity (recordId)
     * of the record.</p>
     * @example
     * <caption>This example calculates the total of field SALARY for all the records that are
     * currently in the model. Deleted and aggregate records are skipped.</caption>
     * var total = 0;
     * model.forEach( function( record, index, id ) {
     *     var salary = parseFloat( model.getValue( record, "SALARY" ) ),
     *         meta = model.getRecordMetadata( id );
     *
     *     if ( !isNaN( salary ) && !meta.deleted && !meta.agg ) {
     *         total += salary;
     *     }
     * } );
     * // do something with total
     * @param pCallback - Function called for each record in the model collection.
     *     The function is given the current record, index, and id.
     * @param [pThisArg] - Value to use as <code class="prettyprint">this</code>
     *     when calling <code class="prettyprint">pCallback</code>.
     */
    forEach(pCallback: model.IteratorCallback, pThisArg?: any): void;
    /**
     * <p>Transform a copy of the table shape model data into another data structure according to the provided template rules.
     * The transformed output data structure is returned.</p>
     * @example
     * <caption>The following example generates groups and series data for a jet Bar chart from a model
     * created from:<br>
     *     select job, deptno, avg(sal) as avg_sal from emp group by job, deptno</caption>
     *
     * var data = mymodel.transform( {
     *              template: [ {
     *                      path: "groups",
     *                      uniqueIndexField: "DEPTNO",
     *                      item: { name: "DEPTNO" }
     *                  }, {
     *                      path: "series",
     *                      uniqueIndexField: "JOB",
     *                      item: { name: "JOB" }
     *                  }, {
     *                      path: "series/[JOB]/items",
     *                      item: { label: "'AVG_SAL'",
     *                              value: "AVG_SAL",
     *                              name: "DEPTNO"
     *                          }
     *                  } ]
     *              });
     * @param pOptions - An object with properties that define how the model data is to be transformed.
     *     All properties are optional except for template.
     * @param pOptions.template - An array of rule objects each one describing where and how to create an array
     *                           in the output data. Each rule object can have these properties:
     * @param pOptions.template.path - A "/" separated list of property names or indexed fields. The path specifies
     *      where in the output object structure to create an (or use existing) array to
     *      add items to. For example a path of "a/b" will result in output:
     *  <pre class="prettyprint"><code>
     *  {
     *      a: {
     *          b: [&lt;items go here>]
     *      }
     *  }
     *  </code></pre>
     *      <p>An indexed field is the name of a record field wrapped in square brackets.
     *      This creates an array for each unique value of the field. For example a path
     *      of "a/[ENABLED]/b" where the field ENABLED can have values of "yes" and "no" results in output:</p>
     *  <pre class="prettyprint"><code>
     *  {
     *      a: [
     *          {
     *              b: [&lt;items for records with enabled = yes go here>]
     *          },
     *          {
     *              b: [&lt;items for records with enabled = no go here>]
     *          }
     *      ]
     *  }
     *  </code></pre>
     * @param pOptions.template.filter - Filter function( model, record, index, id) return true to
     *     include and return false to skip the given record.
     * @param pOptions.template.uniqueIndexField - The name of a record field. If given an item will be added
     *     to the array only for the first record with a unique value of this field.
     * @param pOptions.template.item - An object, string, array or function that
     *     serves as a template for the elements/items of the output array the resulting value depends on the type:
     *     <ul>
     *         <li>string: A string is the name of a record field and the resulting value is the value of that field or
     *           if it begins and ends with a single quote then the value is the text inside the single quotes or
     *           if it begins with ( and ends with ) the string inside the parens is the
     *           name of a record field and the resulting value is the raw value of that field not the display value
     *           or <code class="prettyprint">showNullAs</code> value.</li>
     *         <li>function: The resulting value is the return value of the function
     *           f(pContext, self, record, index, id)</li>
     *         <li>object: the resulting value is a new object where the properties of the new object
     *           are the same as the properties of this template object and the value of
     *           the properties support the same options as item.</li>
     *         <li>array: The resulting value is a new array where the value items in the new array
     *           come from the template items in this array. The template items support the same
     *           options as item.</li>
     *     </ul>
     * @param pOptions.template.sort - A function suitable as the argument to
     *     <code class="prettyprint">Array.prototype.sort</code> that will sort the output array after all
     *     records are processed.
     * @param pOptions.filter - Filter function( model, record, index, id) return true to include and
     *     return false to skip the given record.
     * @param pOptions.showNullAs - A string to substitute for null field values.
     * @param pOptions.includeAggregates - If true aggregate records are included otherwise they are
     *     skipped this is done before the <code class="prettyprint">filter</code> function is called.
     * @param pOptions.offset - Offset index of first record to process defaults to 0.
     * @param pOptions.count - Count of records starting at <code class="prettyprint">offset</code>
     *    to process. Defaults to all the data currently in the model.
     * @param [pContext] - This is the output object to return with data arrays filled in based on the
     *    template rules. If pContext is not given an empty object is used as a starting point. All functions
     *    are called in the context of this object. Note: if the template rule(s) don't
     *    have a path then pContext can be an array.
     * @returns The output data structure. Same object as <code class="prettyprint">pContext</code> if it was given.
     */
    transform(pOptions: {
        template: {
            path: string;
            filter: (...params: any[]) => any;
            uniqueIndexField: string;
            item: any | any[] | string | ((...params: any[]) => any);
            sort: string;
        }[];
        filter: (...params: any[]) => any;
        showNullAs: string;
        includeAggregates: boolean;
        offset: number;
        count: number;
    }, pContext?: any): any;
    /**
     * <p>Iterate over a range (page) of the model collection. This is only valid for table shape models.
     * Calls <code class="prettyprint">pCallback</code> for <code class="prettyprint">pCount</code>
     * records in the collection starting at <code class="prettyprint">pOffset</code>.
     * If the model doesn't yet contain the requested records they will be fetched from the server
     * by calling {@link model#fetch}. If the collection has fewer records than requested or if there is an error
     * fetching data from the server then <code class="prettyprint">pCallback</code> is called with a null record.</p>
     *
     * <p>The callback receives the record, the zero based index of the record, and the identity (recordId)
     * of the record.</p>
     * @example
     * <caption>This example renders a <code class="prettyprint">pageSize</code> page of records
     *   starting at offset <code class="prettyprint">currentPageOffset</code>.</caption>
     * var count = 0,
     *     pageOffset = currentPageOffset;
     * model.forEachInPage( pageOffset, pageSize, function( record, index, id ) {
     *     if ( record ) {
     *         // render the record
     *         count += 1;
     *     }
     *     if ( count === pageSize || !record ) {
     *         // done rendering this page of records
     *     }
     * } );
     * @param pOffset - Zero based index to begin iterating.
     * @param pCount - The number of records to call <code class="prettyprint">pCallback</code> for.
     * @param pCallback - Function called for each record in the model collection.
     *     The function is given the current record, index, and id.
     * @param [pThisArg] - Value to use as <code class="prettyprint">this</code> when calling
     *     <code class="prettyprint">pCallback</code>.
     */
    forEachInPage(pOffset: number, pCount: number, pCallback: model.IteratorCallback, pThisArg?: any): void;
    /**
     * <p>Return the index of the record within the collection. The collection may include aggregate records.
     * Useful because {@link model#forEachInPage} method takes a starting index/offset.</p>
     *
     * <p>Only applies to table and tree shape models. Throws an error if the model shape is record.
     * For tree shape models returns the index of the node among its siblings.</p>
     * @param pRecord - The record to return the index of.
     * @returns The record index or -1 if not in collection.
     */
    indexOf(pRecord: model.Record): number;
    /**
     * <p>Return the record at the given index within the model collection. Only applies to table shape models.</p>
     * @example
     * <caption>This example returns the fifth record in the collection assuming it exists.</caption>
     * var record = model.recordAt(5);
     * @param index - The index of the record to return.
     * @returns The record or null if there is no record at the given index.
     */
    recordAt(index: number): model.Record;
    /**
     * <p>Given a record return the unique identifier (id) for the record. The id is used in calls to
     * {@link model#getRecordMetadata} and {@link model#getRecord}. If the model has multiple
     * identity fields this returns a string representation of the combined fields.</p>
     * @example
     * <caption>This example gets the identity of record <code class="prettyprint">someRecord</code>
     *     and uses it to get the record metadata.</caption>
     * var id = model.getRecordId( someRecord ),
     *     meta = model.getRecordMetadata( id );
     * // use meta for something
     * @param pRecord - The record to get the id from.
     * @returns The record id or null if no identityField is defined.
     */
    getRecordId(pRecord: model.Record): string;
    /**
     * Return true if the given field name is an identity field and false otherwise.
     * @param pFieldName - Name of record field.
     */
    isIdentityField(pFieldName: string): boolean;
    /**
     * <p>Return the metadata object for the record given by the record id. This only applies to models that
     * define an identity field with option <code class="prettyprint">identityField</code>.</p>
     *
     * <p>Upper layers can store information related to the record here. The metadata should be related to the
     * record itself and not the view of it.</p>
     * @example
     * <caption>This example checks if the record <code class="prettyprint">someRecord</code>
     *     is updated.</caption>
     * var id = model.getRecordId( someRecord ),
     *     meta = model.getRecordMetadata( id );
     * if ( meta.updated ) {
     *     // do something related to the updated record
     * }
     * @param pRecordId - Value of the record's identity field or array of values of the record's
     *     identity fields or value returned by {@link model#getRecordId}.
     * @returns Metadata object or null if there is no record associated with
     *     <code class="prettyprint">pRecordId</code>.
     */
    getRecordMetadata(pRecordId: string | string[]): model.RecordMetadata;
    /**
     * <p>Call this method if any properties of the metadata returned by {@link model#getRecordMetadata} are changed
     * external to this module. Most record or field metadata should not be changed externally. However it may
     * be useful and reasonable to externally change metadata that comes from the records initially such as canEdit
     * or custom metadata properties.
     * The result of calling this method is sending a {@link model#event:metaChange} notification.</p>
     * @param pRecordId - Value of the record's identity field or array of values of the record's
     *     identity fields or value returned by {@link model#getRecordId}.
     * @param [pFieldName] - Name of record field that has a metadata change if any.
     */
    metadataChanged(pRecordId: string, pFieldName?: string): void;
    /**
     * <p>Return metadata object for given field name. The field metadata is supplied when the model is created
     * in option property <code class="prettyprint">fields</code>.</p>
     * @param pFieldName - The field name.
     * @returns Metadata object or null if there is no such field.
     */
    getFieldMetadata(pFieldName: string): model.FieldMeta;
    /**
     * <p>Return the index/key to use for the given field name when accessing that field of a record.
     * Use the value returned from this method to access a record field without using {@link model#getValue}.
     * This will work regardless of if the records are stored as objects or arrays.</p>
     * @example
     * <caption>This example gets the field key for the model field named "COST" and uses it
     * in a loop over array of records <code class="prettyprint">selectedRecords</code>.</caption>
     * var i, cost,
     *     costKey = model.getFieldKey("COST");
     * for ( i = 0; i < selectedRecords.length; i++ ) {
     *     cost = selectedRecords[i][costKey];
     *     // do something with cost
     * }
     * @param pFieldName - The field name.
     * @returns returns undefined if the field doesn't exist or is virtual
     */
    getFieldKey(pFieldName: string): string | number | undefined;
    /**
     * <p>Determine if the model has been changed in any way. See also {@link model#getChanges}.</p>
     *
     * <p>Note: Auto inserted records don't count as changes unless they are also updated but
     * they are returned by {@link model#getChanges}.</p>
     * @example
     * <caption>This example logs a console message if the model has changed.</caption>
     * if ( model.isChanged() ) {
     *     console.log("Model has changes.");
     * }
     * @returns true if the model has changed and false otherwise.
     */
    isChanged(): boolean;
    /**
     * <p>Return an array of record metadata for all changed records.
     * Do not make any changes to the data structure returned. See also {@link model#isChanged}.</p>
     * @example
     * <caption>This example logs a console message if the model has changed that includes the number of changes.</caption>
     * if ( model.isChanged() ) {
     *     console.log("Model has " + model.getChanges().length + " changes.");
     * }
     * @returns Array of record metadata for changed records.
     */
    getChanges(): model.RecordMetadata[];
    /**
     * This marks the model as not having any changes. All change indications will be removed.
     * If any record deletes are pending they will be removed by this method. This does not revert or undo the
     * changes but rather removes all metadata that is tracking changes. This happens implicitly after the model
     * is saved (See {@link model#save}). Use this method if changes are persisted in some other way or the
     * changes should be discarded before refreshing the model.
     * @example
     * <caption>This example clears all the changes of an interactive grid with static id "emp"
     * in response to a Cancel or Abort button being pressed by the user. Use in a Execute JavaScript Code dynamic action.
     * If not for the call to <code class="prettyprint">clearChanges</code> before <code class="prettyprint">refresh</code>
     * the interactive grid would prompt the user to save changes.</caption>
     * var ig$ = apex.region( "emp" ).widget(),
     *     view = ig$.interactiveGrid( "getCurrentView" );
     * if ( view.supports.edit ) {
     *     // leave edit mode so that the column items will be reinitialized
     *     ig$.interactiveGrid( "getActions" ).set( "edit", false );
     *     view.model.clearChanges();
     * }
     * apex.region("emp").refresh();
     */
    clearChanges(): void;
    /**
     * <p>Return true if the model has any errors.</p>
     * @example
     * <caption>This example logs a console message if the model has errors.</caption>
     * if ( model.hasErrors() ) {
     *     console.log("Model has errors.");
     * }
     * @returns true if model has errors and false otherwise.
     */
    hasErrors(): boolean;
    /**
     * <p>Return an array of record metadata for all records with errors.
     * Do not make any changes to the data structure returned.</p>
     * @returns Array of record metadata for error records.
     */
    getErrors(): model.RecordMetadata[];
    /**
     * <p>Select or unselect the given record.</p>
     *
     * <p>This method should only be used by view widgets to persist the view selection state in metadata property
     * <code class="prettyprint">sel</code>.
     * Note there is no notification about this metadata change. Listen to the view for selection change events. Also
     * use the view to change the selection.</p>
     * @param pRecordId - The record id to set the selection state metadata.
     * @param pSelected - The desired record selection state; true to select and false to unselect.
     */
    setSelectionState(pRecordId: string, pSelected: boolean): void;
    /**
     * <p>Unselect all the selected records. See also {@link model#setSelectionState}.</p>
     *
     * <p>This method should only be used by view widgets to persist the view selection state in metadata property
     * <code class="prettyprint">sel</code>.
     * Note there is no notification about this metadata change. Listen to the view for selection change events. Also
     * use the view to change the selection.</p>
     */
    clearSelection(): void;
    /**
     * <p>Return the number of currently selected records. This only applies if a view is storing selection state
     * in the model. See also {@link model#setSelectionState}.</p>
     *
     * <p>This is used by views that store view selection state in the model to return the selection count.</p>
     * @returns The number of selected records.
     */
    getSelectedCount(): number;
    /**
     * <p>Return an array of the selected records. This only applies if a view is storing selection state
     * in the model. See also {@link model#setSelectionState}.</p>
     *
     * <p>This is used by views that store view selection state in the model to return the selection.</p>
     * @returns The selected records.
     */
    getSelectedRecords(): model.Record[];
    /**
     * Determine if the given record can be edited.
     *
     * <p>For a record to be editable:</p>
     * <ul>
     * <li>the model must have the <code class="prettyprint">editable</code> option set to true and</li>
     * <li>the type of the record must allow edit or</li>
     * <li>if the record has no type or doesn't specify if it can be edited the default type must allow edit</li>
     * <li>and if the model specifies an additional <code class="prettyprint">check</code> callback
     *   function it must allow or deny the edit</li>
     * </ul>
     * @example
     * <caption>This example checks if editing is allowed before setting a value.</caption>
     * if ( myModel.allowEdit( record ) ) {
     *     myModel.setValue( record, "NAME", newName );
     * }
     * @param pRecord - The record to check if editing is allowed.
     * @returns true if the record can be edited.
     */
    allowEdit(pRecord: model.Record): boolean;
    /**
     * Determine if the given record can be deleted.
     *
     * <p>For a record to be deletable:</p>
     * <ul>
     * <li>the shape must not be record and</li>
     * <li>if the shape is a tree the record must not be the root record</li>
     * <li>the model must have the <code class="prettyprint">editable</code> option set to true and</li>
     * <li>the type of the record must allow delete or</li>
     * <li>if the record has no type or doesn't specify if it can be deleted the default type must allow delete</li>
     * <li>and if the model specifies an additional <code class="prettyprint">check</code> callback
     *   function it must allow or deny the delete</li>
     * </ul>
     * @example
     * <caption>This example checks if deleting is allowed before deleting a record.</caption>
     * if ( myModel.allowDelete( record ) ) {
     *     myModel.deleteRecords( [record] );
     * }
     * @param pRecord - The record to check if deleting is allowed.
     * @returns true if the record can be deleted.
     */
    allowDelete(pRecord: model.Record): boolean;
    /**
     * Determine if any record or one or more specific records can be added to the table collection or, for trees,
     * the parent record's children collection.
     *
     * <p>For any record or one or more specific records to be addable:</p>
     * <ul>
     * <li>the shape must not be record and</li>
     * <li>if the shape is a tree the parent record is required and must have a children collection</li>
     * <li>the model must have the <code class="prettyprint">editable</code> option set to true and</li>
     * <li>if the shape is tree the type of the parent record must allow add or</li>
     * <li>if the shape is table or the parent record has no type or doesn't specify if it allows add the
     * default type must allow add</li>
     * <li>and if the model specifies an additional <code class="prettyprint">check</code> callback function
     *   it must allow or deny the add</li>
     * <li>then, for tree shape only, if adding is allowed and <code class="prettyprint">pRecordsToAdd</code>
     *   is given then check if the type of each record to add is a valid child type for the parent using
     *   validChildren type property.</li>
     * </ul>
     * @example
     * <caption>This example checks if adding is allowed before inserting a record.</caption>
     * if ( myModel.allowAdd() ) {
     *     myModel.insertNewRecord();
     * }
     * @param [pParentRecord] - The parent record to add children to if the shape is tree,
     *  null if the shape is table.
     * @param [pAddAction] - Specifies how/why the records are to be added.
     *  Standard values are "new", "move", or "copy".
     * @param [pRecordsToAdd] - An array of the records to be added. Only used for tree shape models.
     * @returns true if add is allowed.
     */
    allowAdd(pParentRecord?: model.Record, pAddAction?: string, pRecordsToAdd?: model.Record[]): boolean;
    /**
     * Determine if an record can be dragged.
     * Note this is just a check to see if the dragging can start. What is allowed on drop (move, copy etc.)
     * is a separate check.
     *
     * <p>For a record to be draggable:</p>
     * <ul>
     * <li>the shape must not be record and</li>
     * <li>the model must have the <code class="prettyprint">editable</code> option set to true and</li>
     * <li>the type of the record must allow drag or</li>
     * <li>if the record has no type or doesn't specify if it can be dragged the default type must allow drag</li>
     * <li>and if the model specifies an additional <code class="prettyprint">check</code> callback function
     *   it must allow or deny the drag</li>
     * </ul>
     * @param pRecord - The record to check if it can be dragged.
     * @returns true if the record can be dragged.
     */
    allowDrag(pRecord: model.Record): boolean;
    /**
     * <p>Determine what drag operations are allowed for a set of records. Not all views support dragging.
     * Dragging is a view operation. The model provides this method simply to allow type based configuration
     * of available drag operations. Note: The model types option is not currently documented and may change
     * in the future.</p>
     * @param pRecords - array of records to determine drag operations for or null when dragging
     *     an external record into this model.
     * @returns object with allowed drag operations. The properties are: "normal", "ctrl", "alt", "shift", "meta".
     *     The standard values are "move", "copy" or "add". Other values are allowed. The normal property is required.
     *     The default is: <code class="prettyprint">{ normal: "move", ctrl: "copy" }</code>
     *     or if <code class="prettyprint">pRecords</code> is null <code class="prettyprint">{ normal: "add" }</code>
     */
    dragOperations(pRecords: model.Record[]): any;
    /**
     * <p>Low level operation permission checking. Better to use {@link model#allowEdit}, {@link model#allowDelete},
     * {@link model#allowAdd}, {@link model#allowDrag}.
     * The purpose is to determine what kinds of edits are allowed.</p>
     *
     * <p>If the model is not editable (editable option is false) then no operations are allowed.
     * Also no operations are allowed on deleted records or aggregate records.</p>
     *
     * <p>Operation checking is based on the type of the record (as determined by the type field) and the type
     * information given to the model in the types option. Type names are strings. The special type name
     * "default" is used to provide a default when records don't have a type or the type of the record doesn't
     * specify a value for the operation. Note: The model types option is not currently documented and may change
     * in the future.</p>
     *
     * <p>Operations are strings. The standard operation permissions are "canAdd", "canDelete", "canEdit",
     * "canDrag". You can define your own as well.</p>
     *
     * <p>First the record itself is checked to see if it allows the operation by checking if the record metadata contains
     * the specified permission.
     * Next the type of the record is checked to see if it allows the operation.
     * If the record has no type or the operations for that type didn't specify a value for the operation then
     * the default type is checked to see if it allows the operation.
     * The value of an operation is true or false or a function that returns true or false. The function is
     * called in the context of this model with arguments <code class="prettyprint">pRecord, pAddAction, pRecordsToAdd</code>.
     * If the model options includes a <code class="prettyprint">check</code> function then it is called with the result so far and all the
     * same arguments as this check function. See {@link model.CheckCallback}.</p>
     * @param pOperation - One of the default checks ("canEdit", "canDelete", "canAdd", "canDrag") or a custom
     * operation.
     * @param [pRecord] - The record to check if action is allowed on it.
     * @param [pAddAction] - Only used by allowAdd see {@link model#allowAdd} for details.
     * @param [pRecordsToAdd] - Only used by allowAdd see {@link model#allowAdd} for details.
     * @returns true if the operation is allowed.
     */
    check(pOperation: string, pRecord?: model.Record, pAddAction?: string, pRecordsToAdd?: model.Record[]): boolean;
    /**
     * <p>Return the record for a given record id. This only considers records that are currently fetched
     * into the model. The server may have a record with the given record id but if it hasn't yet been
     * fetched into the model, it will not be found with this method.</p>
     * <p>For table or tree shape models that define an <code class="prettyprint">identityField</code>
     * option, call with the value of the record's identity field or if the records have multiple identity fields
     * call with an array of ids or a string representation of the combined identity fields as returned by
     * {@link model#getRecordId}.</p>
     * <p>For table shape models that don't define an <code class="prettyprint">identityField</code> option
     * call with the index of the record. This is the same as {@link model#recordAt}.
     * <p>For record shape models call with no record id to get the one and only model record.</p>
     * @example
     * <caption>This example returns the record with identity "001002".</caption>
     * record = model.getRecord( "001002" );
     * @example
     * <caption>This example has a table shape model with two identity fields. It returns the
     * record from a model with identity <code class="prettyprint">["AXB9", "00003"]</code>.</caption>
     * record = model.getRecord( ["AXB9", "00003"] );
     * @example
     * <caption>This example returns the record from a model with shape record.</caption>
     * record = model.getRecord();
     * @param [pRecordId] - The record id.
     * @returns Returns a record or null if no record corresponding to <code class="prettyprint">pRecordId</code> is found.
     */
    getRecord(pRecordId?: string | string[]): model.Record | null;
    /**
     * <p>Get the value of a record field given the record itself
     * or omit the record when the model shape is record. See also {@link model#setValue}.</p>
     * @example
     * <caption>This example returns the NAME field of the given record.</caption>
     * var name = model.getValue( someRecord, "NAME" );
     * @example
     * <caption>This example returns the NAME field from a record shape model.</caption>
     * var name = model.getValue( "NAME" );
     * @param [pRecord] - The record to return the value of the given column.
     *  Omit if model shape is record.
     * @param pFieldName - Name of record field to get.
     * @returns Value of record field.
     */
    getValue(pRecord?: model.Record, pFieldName: string): any;
    /**
     * <p>Set the value of a record field given the record itself
     * or omit the record when the model shape is record. See also {@link model#getValue}.</p>
     *
     * <p>An error is thrown if the record does not allow editing or the field does not allow being set.</p>
     * @example
     * <caption>This example sets the NAME field of the given record.</caption>
     * model.getValue( someRecord, "NAME", newName );
     * @example
     * <caption>This example sets the identity field PART_NO of the given record. It checks for
     * a duplicate value and gives a message if the new part number is already taken.</caption>
     * var result = model.getValue( someRecord, "PART_NO", newPartNo );
     * if ( result === "DUP" ) {
     *     apex.message.alert( "The part number " + newPartNo + " is already taken." );
     * }
     * @example
     * <caption>This example sets the NAME field from a record shape model.</caption>
     * model.getValue( "NAME", newName );
     * @param [pRecord] - The record that will have a field set to the given value.
     *  Omit if model shape is record.
     * @param pFieldName - Name of record field to set.
     * @param pValue - the value to set
     * @returns One of:
     * <ul>
     *     <li>"SET": The value was set.</li>
     *     <li>"DUP": The value was not set because of duplicate identity. This can only happen when setting an
     *     identity field. Note: Even if the new value is unique on the client it may still result in an
     *     error when saving because the client in general does not have all the data that the server does.</li>
     *     <li>"NC": The value was not set because the new value is equal to the old value.</li>
     *     <li>null: The record is not in the model.</li>
     * </ul>
     */
    setValue(pRecord?: model.Record, pFieldName: string, pValue: any): string | null;
    /**
     * <p>Get the value of a record field given the record id.
     * This is only useful when the model shape is table or tree.
     * If there are many field values to get or set use {@link model#getRecord} followed by {@link model#getValue}
     * or {@link model#setValue}. See also {@link model#setRecordValue}.</p>
     * @example
     * <caption>This example gets the NAME field of the record with identity "00013".</caption>
     * var name = model.getRecordValue( "00013", "NAME" );
     * @param pRecordId - Value of the record's identity field or array of values of the record's
     *     identity fields or value returned by {@link model#getRecordId}.
     * @param pFieldName - Name of record field to get.
     * @returns Value of record field.
     */
    getRecordValue(pRecordId: string | string[], pFieldName: string): any;
    /**
     * <p>Set the value of a record field given the record id.
     * This is only useful when the model shape is table or tree.
     * If there are many field values to get or set use {@link model#getRecord} followed by {@link model#getValue}
     * or {@link model#setValue}. See also {@link model#getRecordValue}.</p>
     * @example
     * <caption>This example sets the NAME field of the record with identity "00013".</caption>
     * model.setRecordValue( "00013", "NAME", newName );
     * @param pRecordId - Value of the record's identity field or array of values of the record's
     *     identity fields or value returned by {@link model#getRecordId}.
     * @param pFieldName - Name of record field to set.
     * @param pValue - Value to set.
     */
    setRecordValue(pRecordId: string | string[], pFieldName: string, pValue: any): void;
    /**
     * <p>Sets the validity and associated validation message of a record or record field.</p>
     * @example
     * <caption>This examples calls a function, <code class="prettyprint">checkRecord</code>, that returns
     * an error message if the record is not valid and null if it is valid. It then sets the validity of the record.
     * </caption>
     * var invalidReasonMessage = checkRecord( recordId );
     * if ( invalidReasonMessage ) {
     *     model.setValidity( "error", recordId, null, invalidReasonMessage );
     * } else {
     *     this.model.setValidity( "valid", recordId );
     * }
     * @param pValidity - one of "error", "warning", "valid".
     * @param pRecordId - Value of the record's identity field or array of values of the record's
     *     identity fields or value returned by {@link model#getRecordId}.
     * @param [pFieldName] - Name of field that the validity state applies to or null if it applies to the whole record.
     * @param [pMessage] - Error or warning message text or omit if valid
     */
    setValidity(pValidity: string, pRecordId: string, pFieldName?: string, pMessage?: string): void;
    /**
     * <p>Delete one or more records from a table or tree.
     * </p>
     * <p>If the <code class="prettyprint">onlyMarkForDelete</code>
     * option is true the records are just marked for delete.
     * Records marked for delete will be included in data returned by {@link model#forEach}, {@link model#forEachInPage},
     * {@link model#walkTree}, etc. and can be found by {@link model#getRecord}. They will be deleted once the
     * {@link model#clearChanges} method is called explicitly or implicitly after data has been saved successfully.
     * </p>
     * <p>If the <code class="prettyprint">onlyMarkForDelete</code> option is false
     * the records are deleted right away and are no longer part of the model. In either case the deleted records
     * are on the change list so the delete can be persisted.</p>
     *
     * <p>If <code class="prettyprint">pRecords</code> contains records that cannot be found in the collection
     * or finds records that can't be deleted they are ignored and a debug warning is given.</p>
     * @example
     * <caption>This example checks if deleting is allowed before deleting a record.</caption>
     * if ( myModel.allowDelete( record ) ) {
     *     myModel.deleteRecords( [record] );
     * }
     * @param pRecords - An array of records to delete.
     * @returns The number of records deleted or marked for delete.
     */
    deleteRecords(pRecords: model.Record[]): number;
    /**
     * <p>Return true if the record exists in the model and has a change that can be reverted
     * (is updated or is deleted). See also {@link model#revertRecords}.</p>
     * @example
     * <caption>This example checks if a record can be reverted before reverting it.</caption>
     * if ( myModel.canRevertRecord( record ) ) {
     *     myModel.revertRecords( [record] );
     * }
     * @param pRecord - The record to check if it can be reverted.
     * @returns true if record has change that can be reverted.
     */
    canRevertRecord(pRecord: model.Record): boolean;
    /**
     * <p>Revert one or more records to the way they were when first added to the model or last saved.
     * This undoes any changes made to the records. See also {@link model#canRevertRecord}.</p>
     * @example
     * <caption>This example checks if a record can be reverted before reverting it.</caption>
     * if ( myModel.canRevertRecord( record ) ) {
     *     myModel.revertRecords( [record] );
     * }
     * @param pRecords - The records to revert.
     * @returns The number of records reverted. This can be less than the number of records in
     *   <code class="prettyprint">pRecords</code> if some of the records had no changes to revert.
     */
    revertRecords(pRecords: model.Record[]): number;
    /**
     * <p>Inserts a new record into the collection. Only applies to tree and table shape models.
     * For tree shape models the record is inserted under the given parent node. The model must
     * allow adding new records. See {@link model#allowAdd}.</p>
     * @param [pParentRecord] - Parent tree node. Only for tree shape models, must be null otherwise.
     * @param [pAfterRecord] - Record after which to insert the new record. If not given
     *   the new record is inserted at the beginning.
     * @param [pNewRecord] - The new record to insert. If not given a new record is created using defaults.
     *   The identity, meta, children, and parent fields if any will be initialized.
     * @returns The temporary primary key of inserted record.
     */
    insertNewRecord(pParentRecord?: model.Record, pAfterRecord?: model.Record, pNewRecord?: model.Record): string;
    /**
     * <p>Moves the given records to a new position in the collection (table or parentRecord's children) or, for
     * tree shape only, to a new parent node.</p>
     *
     * <p>For tree shape models if there is a <code class="prettyprint">parentIdentityField</code>
     * the moved records will have the parent identity field
     * set to the identity of the new parent record.</p>
     * @param pRecords - Array of records to move.
     * @param [pParentRecord] - Only used when the shape is tree.
     *     This is the parent node to insert the moved records into. If null then insert to root.
     * @param [pAfterRecord] - The moved records are added after this record or if null at the beginning.
     * @returns Array of record identities of moved records.
     */
    moveRecords(pRecords: model.Record[], pParentRecord?: model.Record, pAfterRecord?: model.Record): string[];
    /**
     * <p>Copies the given records and inserts the copies into the collection (table or parent node's children) or, for
     * tree shape only, to a new parent node.</p>
     * @example
     * <caption>This examples copies the selected records to just after the last selected record.</caption>
     * var keys = model.copyRecords( selectedRecords, null, selectedRecords[ selectedRecords.length - 1 ] );
     * @param pRecords - Array of records to copy.
     * @param [pParentRecord] - Only used when the shape is tree. This is the parent node to insert the copies into. If null then insert to root.
     * @param [pAfterRecord] - The copied records are added after this record or if null at the beginning.
     * @returns Array of temp primary keys of inserted records.
     */
    copyRecords(pRecords: model.Record[], pParentRecord?: model.Record, pAfterRecord?: model.Record): string[];
    /**
     * <p>Return the root node of the tree. An error is thrown if the model shape is not tree.</p>
     * @example
     * <caption>This example gets the tree shape model root node.</caption>
     * var rootNode = model.root();
     * @returns Root node or null if there is no root.
     */
    root(): model.Node;
    /**
     * <p>Return the child at pIndex of node pNode.</p>
     *
     * <p>This method must only be used on tree shape models.</p>
     * @example
     * <caption>This example loops over the children of a parent node.</caption>
     * var i, node;
     * for ( i = 0; i < model.childCount( parentNode ); i++ ) {
     *     node = mode.child( parentNode, i );
     *     // do something with node
     * }
     * @param pNode - The node who's ith child is to be returned.
     * @param pIndex - The index of the child node.
     * @returns The ith child node.
     */
    child(pNode: model.Node, pIndex: number): model.Node;
    /**
     * <p>Return the parent node of the given node. Only supported for tree shape models that have an
     * <code class="prettyprint">identityField</code> option defined.</p>
     *
     * <p>This method must only be used on tree shape models.</p>
     * @param pNode - The node to get the parent of.
     * @returns Parent node or null for the root node and undefined otherwise
     */
    parent(pNode: model.Node): model.Node;
    /**
     * <p>Returns the number of children that node <code class="prettyprint">pNode</code> has, or null if the answer is not yet known.
     * A node that has its children lazy loaded may not know how many children it has until they are loaded.</p>
     *
     * <p>This method must only be used on tree shape models.</p>
     * @example
     * <caption>This example loops over the children of a parent node.</caption>
     * var i, node;
     * for ( i = 0; i < model.childCount( parentNode ); i++ ) {
     *     node = mode.child( parentNode, i );
     *     // do something with node
     * }
     * @param pNode - The node who's children are to be counted.
     * @returns Number of children, 0 if none, or null if not known.
     */
    childCount(pNode: model.Node): number;
    /**
     * <p>Returns true if the node <code class="prettyprint">pNode</code> has children, false if it does not,
     * and null if not yet known.
     * A node that has its children lazy loaded may not know if it has any children until they are loaded.
     * @example
     * <caption>This example logs a message to the console if the node is a leaf (has no children).</caption>
     * if ( model.hasChildren( node ) === true ) {
     *     console.log("node is a leaf");
     * }
     * @param pNode - The node to check if it has any children.
     * @returns true if the node has children, false if it does not, and null if not known.
     */
    hasChildren(pNode: model.Node): boolean;
    /**
     * <p>Fetch child nodes for node <code class="prettyprint">pNode</code>.
     * This method is only used for trees that lazy load data from the sever as needed. The top level
     * of nodes should not be lazy loaded.</p>
     *
     * <p>This is an asynchronous operation. When it completes the <code class="prettyprint">pCallback</code>
     * function is called with a status argument. Where status is:
     * <ul>
     *     <li>> 0 (or true) if 1 or more children were fetched.</li>
     *     <li>0 if the node has 0 children.</li>
     *     <li>Error if there was an error fetching the children.</li>
     * </ul>
     *
     * <p>Can use either the callback argument or the returned promise to determine when the request is complete.</p>
     * @param pNode - The node record to fetch children for.
     * @param [pCallback] - callback function that is called after nodes have been fetched or there is an error.
     * @returns A promise that receives count of children fetched when resolved and an Error argument when rejected.
     */
    fetchChildNodes(pNode: model.Node, pCallback?: (...params: any[]) => any): promise;
    /**
     * <p>Traverse the tree shape model. Methods of the <code class="prettyprint">pVisitor</code> object
     * are called as follows:</p>
     * <ul>
     *     <li>First the visitor <code class="prettyprint">node</code> method is called for the
     *     <code class="prettyprint">pNode</code> passed to <code class="prettyprint">walkTree</code>.</li>
     *     <li>If the node has children the remaining steps are done.</li>
     *     <li>The visitor <code class="prettyprint">beginChildren</code> method is called.</li>
     *     <li>For each child node <code class="prettyprint">walkTree</code> is called performing these steps recursively.</li>
     *     <li>The visitor <code class="prettyprint">endChildren</code> method is called.</li>
     * </ul>
     * @example
     * <caption>This example walks the tree shape model starting at the root logging information
     * about the tree as it goes. Indentation shows the structure of the tree.
     * The nodes in this model have a NAME field.</caption>
     * var indent = "";
     * model.walkTree( model.root(), {
     *     node: function( node, parent } {
     *         console.log( "Node: " + model.getValue( node, "NAME" ) );
     *     },
     *     beginChildren: function( node ) {
     *         indent += "    ";
     *     },
     *     endChildren: function( node ) {
     *         indent = indent.substring(4);
     *     }
     * }, null );
     * @param pNode - The node to start with. This node is visited and then all of its children are.
     * @param pVisitor.node - Function with signature function(node, parent).
     * @param [pVisitor.beginChildren] - Function with signature function(node).
     * @param [pVisitor.endChildren] - Function with signature function(node).
     * @param [pParentNode] - The parent node of <code class="prettyprint">pNode</code> or null if
     * <code class="prettyprint">pNode</code> is the root. If this argument is omitted or undefined and
     * the model has the <code class="prettyprint">identityField</code> option defined the parent node
     * will be determined automatically. If this argument is omitted or undefined and
     * the model does not have the <code class="prettyprint">identityField</code> option defined then
     * the parent parameter in each call to the visitor <code class="prettyprint">node</code> method is null.
     */
    walkTree(pNode: model.Node, pVisitor: {
        node: (...params: any[]) => any;
        beginChildren?: (...params: any[]) => any;
        endChildren?: (...params: any[]) => any;
    }, pParentNode?: model.Node): void;
    /**
     * <p>Subscribe to model change notifications by adding an observer.</p>
     * @example
     * <caption>This simple example subscribes to a model to handle notifications.</caption>
     * var viewId = model.subscribe( {
     *     onChange: function( changeType, change ) {
     *         // respond to model changes
     *     }
     * } );
     * @example
     * <caption>This example is typical of what a widget that displays model data would do to subscribe.</caption>
     * var viewId = model.subscribe( {
     *     viewId: this.element[0].id
     *     onChange: function(changeType, change) {
     *         // respond to model changes
     *     },
     *     progressView: this.element
     * } );
     * @param pObserver - An observer object that includes a callback function to receive notifications.
     * @returns A viewId to use with {@link model#unSubscribe}. This is the same as the
     *   <code class="prettyprint">viewId</code> property if there is one. One is generated if not given in
     *   <code class="prettyprint">pObserver</code>
     */
    subscribe(pObserver: model.Observer): string;
    /**
     * <p>Unsubscribe to model change notifications.</p>
     * @example
     * <caption>This example unsubscribes from this model using the <code class="prettyprint">viewId</code>
     * returned when subscribing.</caption>
     * model.unSubscribe(viewId);
     * @param pViewId - The view id returned from {@link model#subscribe}.
     */
    unSubscribe(pViewId: string): void;
    /**
     * <p>Get the value of the given model option. The model options are provided in the call
     * to {@link apex.model.create}. See also {@link model#setOption}.</p>
     * @example
     * <caption>This example gets the <code class="prettyprint">onlyMarkForDelete</code> option.</caption>
     * var markForDelete = model.getOption( "onlyMarkForDelete" );
     * @example
     * <caption>This example gets the <code class="prettyprint">hasTotalRecords</code> option.</caption>
     * var hasTotalRecords = model.getOption( "hasTotalRecords" );
     * @param pName - Name of option to get.
     * @returns Option value.
     */
    getOption(pName: string): any;
    /**
     * <p>Set the value of the given model option. The model options are provided in the call
     * to {@link apex.model.create}. See also {@link model#getOption}.</p>
     *
     * <p>The options that can be set are:</p>
     * <ul>
     *     <li>genIdPrefix</li>
     *     <li>pageItemsToSubmit</li>
     *     <li>fetchData</li>
     *     <li>saveData</li>
     *     <li>regionData</li>
     *     <li>parentRecordId</li>
     *     <li>editable</li>
     *     <li>pageSize</li>
     * </ul>
     * @param pName - Name of option to set. Not all options can be set.
     * @param pValue - Value to set the option to.
     */
    setOption(pName: string, pValue: any): void;
}

/**
 * <p>The region interface is used to access region related methods and properties. You get access
 * to the region interface for a region with the {@link apex.region} function.</p>
 *
 * <p>Plug-in developers can define the behavior of their region by calling {@link apex.region.create}.</p>
 */
declare interface region {
    /**
     * <p>The jQuery object for the region element.</p>
     */
    element: jQuery;
    /**
     * <p>Identifies the parent (master) region ID, if the region is the detail region of a master detail relationship.
     */
    parentRegionId: string;
    /**
     * <p>Identifies the type of the region. Regions that don't implement a custom region interface have type "generic".</p>
     */
    type: string;
    /**
     * <p>For regions that are implemented with a jQuery UI style widget, this is the name of the widget. For other
     * widget implementations it is null. It is used internally by the {@link region#call} method.</p>
     */
    widgetName: string;
    /**
     * <p>Cause the region to get new data from the server or otherwise refresh itself. Not all regions support refresh.
     * Exactly what happens depends on the type of region.</p>
     *
     * <p>This function should be used in place of the legacy way of refreshing a region, which was to trigger the
     * apexrefresh event on the region element.</p>
     *
     * <p>The default implementation triggers the legacy apexrefresh event on the region element for backward compatibility
     * with old regions that don't implement this interface.</p>
     * @example
     * <caption>The following will refresh the region with Static ID "myRegion":</caption>
     * var region = apex.region( "myRegion" );
     * region.refresh();
     */
    refresh(): void;
    /**
     * <p>Cause the region to take focus. Not all native or plug-in regions support taking focus. It is up to the
     * specific region to determine where focus will go. Some regions manage focus such that there is a single
     * tab stop (or limited number of tab stops) and they may put focus to where the user last had focus within
     * the region.</p>
     *
     * <p>The default implementation sets focus to the first element in the region that is capable of being tabbed
     * to.</p>
     * @example
     * <caption>The following example will focus the region with Static ID "myRegion".</caption>
     * var region = apex.region( "myRegion" );
     * region.focus();
     */
    focus(): void;
    /**
     * <p>Returns the widget associated with the region or null if the region isn't implemented with a widget.
     * Some advanced region types such as Calendar, Interactive Grid, or Tree are implemented using a widget.
     * This function provides access to the widget typically by returning a jQuery object for the widget element.
     * You can then call widget methods on the jQuery object. See also the {@link region#call} method.</p>
     * @example
     * <caption>The following adds a row to an Interactive Grid by using the region widget method to
     * access the interactiveGrid widget {@link interactiveGrid#getActions} method and then invoking the
     * <code class="prettyprint">selection-add-row</code> action.</caption>
     * apex.region( "myGridRegion" ).widget().interactiveGrid( "getActions" ).invoke( "selection-add-row" );
     * @returns jQuery object or null if there is no widget associated with the region.
     */
    widget(): jQuery | null;
    /**
     * <p>Calls a method on the widget associated with the region. This method only applies to
     * regions that are implemented with a jQuery UI style widget.</p>
     * @example
     * <caption>The call method is a shorthand for calling methods on a widget. The following example
     * shows an Interactive Grid region with Static ID <code class="prettyprint">emp</code> and two equivalent ways of invoking the
     * <code>getSelectedRecords</code> method.</caption>
     * var records1 = apex.region( "emp" ).call( "getSelectedRecords" );
     * // same result as above but this is more verbose
     * var records2 = apex.region( "emp" ).widget().interactiveGrid( "getSelectedRecords" );
     * @param pMethod - The string name of the widget method.
     * @param arguments - Any number of arguments to be passed to the widget method.
     * @returns The return value depends on the method called.
     */
    call(pMethod: string, ...arguments: any[]): any;
    /**
     * <p>Return an alternative loading indicator for the given element. Not all regions have this method so
     * check if it exists before calling. For regions that support column items and when the column items may
     * not be visible on the screen at all times this allows the region to
     * place the loading indicator in an appropriate location. This can return the loading indicator passed in
     * or return a completely new loading indicator.</p>
     * @param pElement - DOM element that may represent a column item.
     * @param pLoadingIndicator$ - A loading indicator that can be inserted in to the DOM where desired and returned or ignored.
     * @returns loadingIndicator jQuery object or null if the region has no alternative for given element.
     */
    alternateLoadingIndicator(pElement: Element, pLoadingIndicator$: jQuery): jQuery;
}

/**
 * <p>The htmlBuilder interface is used create HTML markup. It makes it easy to generate markup that is
 * well formed and properly escaped. It is simpler and safer than using string concatenation and doesn't
 * require the overhead of using a template library. For simple templates see {@link apex.util.applyTemplate}</p>
 * @example
 * <caption>This example creates an HTML string consisting of a label and text input and inserts it
 *     into the DOM. Data to be mixed into the markup is in an options object. The options values will be
 *     properly escaped to avoid cross site scripting security issues. With an options object
 *     <code class="prettyprint">{ id: "nameInput", label: "Name", size: 10, maxChars: 15 }</code>
 *     the resulting markup will be:<br>
 *     <code>&lt;label for='nameInput'>Name&lt;/label>&lt;input type='text' id='nameInput' class='specialInput' size='10' maxlength='15' value='' /></code></caption>
 * var out = apex.util.htmlBuilder();
 * out.markup( "<label" )
 *     .attr( "for", options.id )
 *     .markup( ">" )
 *     .content( option.label )
 *     .markup( "</label><input type='text'" )
 *     .attr( "id", options.id )
 *     .attr( "class", "specialInput" )
 *     .optionalAttr( "title", options.title )
 *     .attr( "size", options.size )
 *     .attr( "maxlength",  options.maxChars )
 *     .attr( "value", "" )
 *     .markup( " />" );
 * $( "#myContainer", out.toString() );
 */
declare interface htmlBuilder {
    /**
     * <p>Add markup.</p>
     * @param pMarkup - The markup to add. No escaping is done.
     * @returns This htmlBuilder instance for method chaining.
     */
    markup(pMarkup: string): this;
    /**
     * <p>Add an attribute.<p>
     * @param [pName] - Attribute name. A leading space and trailing = is added and the value is quoted.
     *     If not given just the value is added without being quoted.
     * @param pValue - Attribute value. This will be escaped.
     * @returns This htmlBuilder instance for method chaining.
     */
    attr(pName?: string, pValue: string): this;
    /**
     * <p>Add an optional attribute. The attribute and its value is only added if the value is a non-empty
     * string or a non-zero number or true.</p>
     * @param pName - Attribute name. A leading space and trailing = is added and the value is quoted.
     * @param pValue - Attribute value. This will be escaped.
     * @returns This htmlBuilder instance for method chaining.
     */
    optionalAttr(pName: string, pValue: string): this;
    /**
     * <p>Add an optional Boolean attribute. The attribute is added only if the value is true.</p>
     * @param pName - Attribute name. A leading space is added.
     * @param pValue - If true the attribute is added. If false the attribute is not added.
     * @returns This htmlBuilder instance for method chaining.
     */
    optionalBoolAttr(pName: string, pValue: boolean): this;
    /**
     * <p>Add element content. The content is escaped.<p>
     * @param pContent - The content to add between an element open and closing tags.
     * @returns This htmlBuilder instance for method chaining.
     */
    content(pContent: string): this;
    /**
     * <p>Remove all markup from this builder interface instance. Use this when you want to reuse the builder
     * instance for new markup.</p>
     */
    clear(): void;
    /**
     * <p>Return the HTML markup.</p>
     * @returns The markup that has been built so far.
     */
    toString(): string;
}

