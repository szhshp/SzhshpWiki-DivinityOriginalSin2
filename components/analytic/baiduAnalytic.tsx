import Script from "next/script";

const baiduAnalyticID = "198d3ecdfabae684480217e13d378ae0";
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
