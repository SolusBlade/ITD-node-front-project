export let themes = {
    dark: {
        primaryBackground: '#121212',
        secondaryBackground: '#1F1F1F',
        headerBackground: '#161616',
        primaryTextColor: '#FFFFFF',
        secondaryTextColor: 'rgba(255, 255, 255, 0.5)',
        boardHeaders: '#FFFFFF',
        btnBg: '#BEDBB0',
        btnTextColor: '#121212',
        selectHeader: 'rgba(255, 255, 255, 0.8)',
        selectOption: 'rgba(255, 255, 255, 0.5)',
        selectListBg: '#151515',
        selectListBorder: '#BEDBB0',
        modalBackground: '#151515',
        btnModalIconPlus: '#FFFFFF',
        btnModalBg: "#161616",
        btnModalTextColor: "#161616",
        cardBg: "#121212",
        boardAddColumnBtn: "#FFFFFF",
        boardAddColumnPlus: "#121212",
        headerModalBtnAddFile: "#BEDBB0",
        sidebarBoardActiveBg: "#1F1F1F",
        sidebarHelpWrapperBg: "#1F1F1F",
        sidebarButtonCreateBg: "#BEDBB0",
        sidebarButtonIconPlus: "#121212",
        sidebarBoardItemHover: "#404040",
        sidebarTextColorMain: "#FFF",
        btnHoverMain:"#a8cf96",
        btnActiveMain: "#8bbf73",
        btnHoverSecondary: "#595959",
        btnActiveSecondary: "#333333",
        sidebarTextColorSecondary: "rgba(255, 255, 255, 0.50)",
        priorityWithoutPriority: "rgba(255, 255, 255, 0.3)",
        scrollHandler: "rgba(255, 255, 255, 0.10)",
        scrollTrack: "#161616",
    },
    light: {
        primaryBackground: '#FFFFFF',
        secondaryBackground: '#F6F6F7',
        headerBackground: '#FCFCFC',
        primaryTextColor: '#161616',
        secondaryTextColor: 'rgba(22, 22, 22, 0.5)',
        boardHeaders: '#161616B2',
        btnBg: '#BEDBB0',
        btnTextColor: '#161616',
        selectHeader: 'rgba(160, 160, 160, 0.8)',
        selectOption: '#161616',
        selectListBg: '#FCFCFC',
        selectListBorder: '#BEDBB0',
        modalBackground: '#FCFCFC',
        btnModalIconPlus: '#FFFFFF',
        btnModalBg: "#161616",
        cardBg: "#FFFFFF",
        boardAddColumnBtn: "#121212",
        boardAddColumnPlus: "#FFFFFF",
        headerModalBtnAddFile: "#BEDBB0",
        sidebarBoardActiveBg: "#F6F6F7",
        sidebarHelpWrapperBg: "#F6F6F7",
        sidebarButtonCreateBg: "#BEDBB0",
        sidebarButtonIconPlus: "#121212",
        sidebarBoardItemHover: "#e4e4e7",
        sidebarTextColorMain: "#161616",
        sidebarTextColorSecondary: "rgba(22, 22, 22, 0.50)",
        btnHoverMain: "#a8cf96",
        btnActiveMain: "#8bbf73",
        btnHoverSecondary: "#404040",
        btnActiveSecondary: "#737373",
        priorityWithoutPriority: "rgba(22, 22, 22, 0.30)",
        scrollHandler: "rgba(22, 22, 22, 0.30)",
        scrollTrack: "rgba(22, 22, 22, 0.20)",
    },
    violet: {
        primaryBackground: '#5255BC',
        secondaryBackground: '#ECEDFD',
        headerBackground: '#FFFFFF',
        primaryTextColor: '#161616',
        secondaryTextColor: 'rgba(22, 22, 22, 0.5)',
        boardHeaders: '#161616',
        btnBg: '#5255BC',
        btnTextColor: '#FFFFFF',
        selectHeader: 'rgba(160, 160, 160, 0.8)',
        selectOption: '#161616',
        selectListBg: '#FCFCFC',
        selectListBorder: '#ECEDFD',
        modalBackground: '#FCFCFC',
        btnModalIconPlus: '#161616',
        btnModalBg: "#FFFFFF",
        cardBg: "#FFFFFF",
        boardAddColumnBtn: "#5255BC",
        boardAddColumnPlus: "#FFFFFF",
        headerModalBtnAddFile: "#ECEDFD",
        sidebarBoardActiveBg: "rgba(255, 255, 255, 0.21)",
        sidebarHelpWrapperBg: "rgba(236, 237, 253, 0.40)",
        sidebarButtonCreateBg: "#B8BCFD",
        sidebarButtonIconPlus: "#FFFFFF",
        sidebarBoardItemHover: "rgba(217, 217, 217, 0.5)",
        sidebarTextColorMain: "#FFF",
        sidebarTextColorSecondary: "rgba(255, 255, 255, 0.50)",
        btnHoverMain: "#6c6fc6",
        btnActiveMain: "#4044a5",
        btnHoverSecondary: "#6c6fc6",
        btnActiveSecondary: "#4044a5",
        priorityWithoutPriority: "rgba(22, 22, 22, 0.30)",
        scrollHandler: "#B8BCFD",
        scrollTrack: "#FFFFFF",
    }
}
// --btn-hover-main: #a8cf96;
// --btn-active-main: #8bbf73;
export const selectHandler = (theme) => {
    const root = document.querySelector(':root');

    root.style.setProperty('--primary-background', themes[theme].primaryBackground);
    root.style.setProperty('--secondary-background', themes[theme].secondaryBackground );
    root.style.setProperty('--header-background', themes[theme].headerBackground);
    root.style.setProperty('--primary-text-color', themes[theme].primaryTextColor);
    root.style.setProperty('--secondary-text-color', themes[theme].secondaryTextColor);
    root.style.setProperty('--board-headers', themes[theme].boardHeaders);
    root.style.setProperty('--btn-bg', themes[theme].btnBg);
    root.style.setProperty('--btn-text-color', themes[theme].btnTextColor);
    root.style.setProperty('--select-header', themes[theme].selectHeader);
    root.style.setProperty('--select-option', themes[theme].selectOption);
    root.style.setProperty('--select-list-bg', themes[theme].selectListBg);
    root.style.setProperty('--select-list-border', themes[theme].selectListBorder);
    root.style.setProperty('--modal-background', themes[theme].modalBackground);
    root.style.setProperty('--btn-modal-icon-plus', themes[theme].btnModalIconPlus);
    root.style.setProperty('--btn-modal-bg', themes[theme].btnModalBg);
    root.style.setProperty('--btn-modal-text-color', themes[theme].btnModalTextColor);
    root.style.setProperty('--card-bg', themes[theme].cardBg);
    root.style.setProperty('--board-add-column-btn', themes[theme].boardAddColumnBtn);
    root.style.setProperty('--board-add-column-plus', themes[theme].boardAddColumnPlus);
    root.style.setProperty('--header-modal-btn-add-file', themes[theme].headerModalBtnAddFile);
    root.style.setProperty('--sidebar-board-active-bg', themes[theme].sidebarBoardActiveBg);
    root.style.setProperty('--sidebar-help-wrapper-bg', themes[theme].sidebarHelpWrapperBg);
    root.style.setProperty('--sidebar-button-create-bg', themes[theme].sidebarButtonCreateBg);
    root.style.setProperty('--sidebar-button-icon-plus', themes[theme].sidebarButtonIconPlus);
    root.style.setProperty('--sidebar-board-item-hover', themes[theme].sidebarBoardItemHover);
    root.style.setProperty('--sidebar-text-color-main', themes[theme].sidebarTextColorMain);
    root.style.setProperty('--sidebar-text-color-secondary', themes[theme].sidebarTextColorSecondary);
    root.style.setProperty('--btn-hover-main', themes[theme].btnHoverMain);
    root.style.setProperty('--btn-active-main', themes[theme].btnActiveMain);
    root.style.setProperty('--btn-hover-secondary', themes[theme].btnHoverSecondary);
    root.style.setProperty('--btn-active-secondary', themes[theme].btnActiveSecondary);
    root.style.setProperty('--priority-without-priority', themes[theme].priorityWithoutPriority);
    root.style.setProperty('--scroll-handler', themes[theme].scrollHandler);
    root.style.setProperty('--scroll-track', themes[theme].scrollTrack);
}