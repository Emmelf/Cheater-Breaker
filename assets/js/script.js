// Anti clique droit

function NoRightClick() {

    document.oncontextmenu = document.body.oncontextmenu = function () { return false; }

};

// Détection taille fenêtre

function WindowSizeDetector() {

    let currdate = new Date();
    let timing = currdate.getHours() + 'h' + currdate.getMinutes();

    console.log('Sreen resolution :', window.screen.width, 'x', window.screen.height, 'at', timing);
    console.log('HTML resolution :', document.body.clientWidth, 'x', document.body.clientHeight, 'at', timing)

    function handleWindowResize() {

        let currdate = new Date();
        let timing = currdate.getHours() + 'h' + currdate.getMinutes();

        console.log('ALERT, HTML resolution changed :', document.body.clientWidth, 'x', document.body.clientHeight, 'at', timing);
        window.removeEventListener('resize', handleWindowResize);

    }

    window.addEventListener('resize', handleWindowResize);

}

// Détection changement de fenêtre

function WindowSwitchDetector() {

    window.addEventListener("blur", () => {
        console.log('ALERT, user left the tab')
        window.removeEventListener("blur", () => { })
    })

};

// Désactiver la selection

function DisableSelection() {

    window.addEventListener('selectstart', function (e) { e.preventDefault(); });

}

export{NoRightClick,WindowSizeDetector,WindowSwitchDetector,DisableSelection}

NoRightClick();
WindowSizeDetector();
WindowSwitchDetector();
DisableSelection();

