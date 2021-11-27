import Script from "next/script";

const baiduAnalyticID = "e9a8aa221ddd0ffadaf08ec797c90e8d";
/**
 * @name attachBaiduAnalytic
 * @description Site Analytic for Baidu
 */
const baiduAnalyticScript = `


var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?${baiduAnalyticID}";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
  
  `;

/**
 * @name baiduAutoPush
 * @description services for baidu
 */
export const Analytics = (): JSX.Element => (
  <>
    {[{ script: baiduAnalyticScript, id: "baiduAnalyticScript" }].map(
      ({ script, id }) => (
        <Script id={id} key={id}>
          {script}
        </Script>
      )
    )}
  </>
);
