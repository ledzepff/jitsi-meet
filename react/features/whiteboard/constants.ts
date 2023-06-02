import { AppProps } from '@ledzepff/excalidraw';

/**
 * Fixed name of the whiteboard fake participant.
 */
export const WHITEBOARD_PARTICIPANT_NAME = 'Whiteboard';

/**
 * Whiteboard ID.
 */
export const WHITEBOARD_ID = 'whiteboard';

/**
 * Whiteboard UI Options.
 */
export const WHITEBOARD_UI_OPTIONS: AppProps['UIOptions'] = {
    canvasActions: {
        changeViewBackgroundColor: true,
        clearCanvas: true,
        export: { saveFileToDisk: true },
        loadScene: true,
        saveToActiveFile: true,
        toggleTheme: null,
        saveAsImage: true
    }
};

/* export const WHITEBOARD_UI_OPTIONS = {
    changeViewBackgroundColor: true,
    clearCanvas: true,
    export: true,
    loadScene: true,
    saveToActiveFile: true,
    toggleTheme: true,
    saveAsImage: true

     canvasActions: {
        allowedShapes: [
            'arrow', 'diamond', 'ellipse', 'freedraw', 'line', 'rectangle', 'selection', 'text'
        ],
        allowedShortcuts: [
            'cut', 'deleteSelectedElements', 'redo', 'selectAll', 'undo'
        ],
        disableAlignItems: true,
        disableFileDrop: true,
        disableGrouping: true,
        disableHints: true,
        disableLink: true,
        disableShortcuts: true,
        disableVerticalAlignOptions: true,
        fontSizeOptions: [ 's', 'm', 'l' ],
        hideArrowHeadsOptions: true,
        hideColorInput: true,
        hideClearCanvas: true,
        hideFontFamily: true,
        hideHelpDialog: true,
        hideIOActions: true,
        hideLayers: true,
        hideLibraries: true,
        hideLockButton: true,
        hideOpacityInput: true,
        hideSharpness: true,
        hideStrokeStyle: true,
        hideTextAlign: true,
        hideThemeControls: true,
        hideUserList: true,
        saveAsImageOptions: {
            defaultBackgroundValue: true,
            disableScale: true,
            disableSelection: true,
            disableClipboard: true,
            disableSceneEmbed: true,
            hideTheme: true
        }
    }
}; */
