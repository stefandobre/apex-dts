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
}

