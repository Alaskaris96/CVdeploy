import puppeteer from "puppeteer";

const generatePDF = async () => {
    const browser = await puppeteer.launch({
        args: ['--font-render-hinting=none']
    });
    const page = await browser.newPage();

    await page.goto(`file://${process.cwd()}/index.html`, {
        waitUntil: "networkidle0",
    });

    await page.pdf({
        path: "cv.pdf",
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        scale: 0.73,
    });

    await browser.close();
};

generatePDF();
