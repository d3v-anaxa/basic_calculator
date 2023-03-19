(function () {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
        c(t);
    new MutationObserver((t) => {
        for (const r of t)
            if (r.type === "childList")
                for (const n of r.addedNodes)
                    n.tagName === "LINK" && n.rel === "modulepreload" && c(n);
    }).observe(document, { childList: !0, subtree: !0 });
    function u(t) {
        const r = {};
        return (
            t.integrity && (r.integrity = t.integrity),
            t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy),
            t.crossOrigin === "use-credentials"
                ? (r.credentials = "include")
                : t.crossOrigin === "anonymous"
                ? (r.credentials = "omit")
                : (r.credentials = "same-origin"),
            r
        );
    }
    function c(t) {
        if (t.ep) return;
        t.ep = !0;
        const r = u(t);
        fetch(t.href, r);
    }
})();
const style = "";
let err_flag = !1,
    ans_flag = !1,
    ans_storage = 0;
document.querySelector("#keys").childNodes.forEach((e) => {
    (document.querySelector("textarea").textContent =
        document.querySelector("textarea").textContent),
        e.addEventListener("click", () => {
            err_flag == !0 &&
                ((document.querySelector("textarea").textContent = ""),
                (err_flag = !1)),
                ans_flag == !0 &&
                    (/[0-9]/.test(e.textContent)
                        ? (document.querySelector("textarea").textContent = "")
                        : (document.querySelector("textarea").textContent =
                              ans_storage),
                    (ans_flag = !1));
            try {
                switch (e.textContent) {
                    case "%":
                        document.querySelector("textarea").textContent =
                            eval(
                                document.querySelector("textarea").textContent
                            ) / 100;
                        return;
                    case "=":
                        (document.querySelector("textarea").textContent = eval(
                            document.querySelector("textarea").textContent
                        )),
                            (ans_storage =
                                document.querySelector("textarea").textContent),
                            (ans_flag = !0);
                        return;
                    case "root":
                        document.querySelector("textarea").textContent =
                            eval(
                                document.querySelector("textarea").textContent
                            ) ** 0.5;
                        return;
                    case "C":
                        document.querySelector("textarea").textContent = "";
                        return;
                }
            } catch (a) {
                (document.querySelector("textarea").textContent =
                    "SYNTAX ERROR"),
                    console.log(a),
                    (err_flag = !0);
                return;
            }
            document.querySelector("textarea").textContent += e.textContent;
        });
});
