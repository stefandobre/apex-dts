/**
 * <p>The apex namespace is the top level Oracle Application Express namespace and contains a number of sub namespaces,
 * and a few common functions and properties.</p>
 *
 * <p>The apex namespace also contains information on Application Express specific events.</p>
 */
declare namespace apex {
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
}

