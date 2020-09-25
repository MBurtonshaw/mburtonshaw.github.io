const url = "/CD_Website_Direction_v1.pdf";

let pdfDoc = "",
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = "";

const scale = 1.5,
    canvas = document.querySelector("#pdf-render"),
    ctx = canvas.getContext("2d");

function renderPage(num) {
    pageIsRendering = true;
    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderCtx = {
            canvasContext: ctx,
            viewport
        };

        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;

            if (pageNumIsPending !== "") {
                renderPage(pageNumIsPending);
                pageNumIsPending = "";
            }
        });
        //Output current page
        document.querySelector("#page-num").textContent = num;
    });
}

//Show prev page
function showPrevPage() {
    if (pageNum < 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

//Show next page
function showNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

//Check for pages rendering
function queueRenderPage(num) {
    if (pageIsRendering) {
        pageNumIsPending = num;
    } else {
        renderPage(pageNum);
    }
}

//Get document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    document.querySelector("#page-count").textContent = pdfDoc.numPages;
    renderPage(pageNum);
});

//Button events
document.querySelector("#prev-page").addEventListener("click", () => {
    showPrevPage();
});
document.querySelector("#next-page").addEventListener("click", () => {
    showNextPage();
});
