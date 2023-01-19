window.BENCHMARK_DATA = {
  "lastUpdate": 1674161648765,
  "repoUrl": "https://github.com/gofiber/fiber",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "distinct": true,
          "id": "c5691c7de55701400c4636793225058f5192f1dc",
          "message": "change output folder for the benchmarks result (gh-pages)",
          "timestamp": "2023-01-19T21:41:33+01:00",
          "tree_id": "6ab13bce1ff7851f5f105171e2299a3a7c25e866",
          "url": "https://github.com/gofiber/fiber/commit/c5691c7de55701400c4636793225058f5192f1dc"
        },
        "date": 1674161588875,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1014,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1016935 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 6470,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "181568 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6556,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "187555 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 174.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7424312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 63.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17202162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 84.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13832176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 63.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19111798 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 249.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4730000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 311.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3422546 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 3.348,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "362841788 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1163,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 826.7,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1424790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3011,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "385224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1468,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "805544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1330,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "820357 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 151.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8648728 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 166.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7490972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 150.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7579088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 353.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3243952 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1989,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "577422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 568.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1953051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 133.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9884202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 216.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6101664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 312.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3789142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 282.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4403713 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 472,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2555467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28174094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 95.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12948499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 47.07,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "21709687 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 50.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24093350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 680.6,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1742629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 81.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14544187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 412.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3163270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4901,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "223498 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69723354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 218.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "5150427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 377.1,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3248815 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 523.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2182874 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2645,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "472726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 177.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6608695 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1394,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "832915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 310.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3580408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 892.8,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1269597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 873.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1465027 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 816.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1416282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 866.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1439928 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 233.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5150469 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.298,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "196456492 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 61.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18971475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26099049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9777568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 120.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10099905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 46.42,
            "unit": "ns/op\t      79 B/op\t       0 allocs/op",
            "extra": "29721241 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 186.9,
            "unit": "ns/op\t      95 B/op\t       1 allocs/op",
            "extra": "6185314 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 60.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20748391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "96556598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4663,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "239049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3822,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "275800 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5177,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "211603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4488,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "239092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1492,
            "unit": "ns/op\t     799 B/op\t       8 allocs/op",
            "extra": "747592 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6307,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "193119 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6449,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "169224 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 166.4,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7417065 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 54.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "20623924 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 62.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19110518 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "273815924 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.524,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "220358961 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 3.887,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "311512422 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1009,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1196367 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1001,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 204.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5855613 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 178.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6537832 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 687.9,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1771796 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 689.2,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1711320 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 916248,
            "unit": "ns/op\t  372994 B/op\t    5608 allocs/op",
            "extra": "1288 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 110.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10461960 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 33.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38123733 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.095,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278117144 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.394,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "343383288 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 178.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6387777 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 254.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4801902 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 190.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5793307 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 288901,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4153 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 248174,
            "unit": "ns/op\t   24576 B/op\t    1000 allocs/op",
            "extra": "4756 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 211165,
            "unit": "ns/op\t     719 B/op\t       0 allocs/op",
            "extra": "5972 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 546.2,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2241634 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 457.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2581954 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 960.2,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1273999 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 572.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2112463 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2513,
            "unit": "ns/op\t     334 B/op\t       7 allocs/op",
            "extra": "672315 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 3040,
            "unit": "ns/op\t     609 B/op\t       7 allocs/op",
            "extra": "620512 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1514,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "737244 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2336,
            "unit": "ns/op\t     278 B/op\t       5 allocs/op",
            "extra": "662389 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2255,
            "unit": "ns/op\t     263 B/op\t       5 allocs/op",
            "extra": "757722 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 150.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8652430 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 133.5,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9081772 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 67.34,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "17282614 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 25.61,
            "unit": "ns/op\t 507.67 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "47470344 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 56.28,
            "unit": "ns/op\t 231.01 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21390576 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 829.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1448811 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 164.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7336246 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 563.2,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2114076 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 381.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3240020 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 408.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2981322 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 725.1,
            "unit": "ns/op\t      14 B/op\t       1 allocs/op",
            "extra": "1635606 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 454.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2546672 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 840.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1448026 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 28772,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "42235 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 29439,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "41665 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 57.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20422135 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 167.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7409836 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 57.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21329828 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 149.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7905306 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 22.39,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49306098 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 23.28,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53013937 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 23.08,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54521774 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 25.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44113968 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 36.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32079794 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 36.31,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "27977097 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 115.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10438424 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 369,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3150303 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 77.47,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14760084 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 554.3,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2269332 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 37.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32876138 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8547,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 30.32,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35986180 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.811,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "639311977 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 36.66,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32001248 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 85.52,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "13191540 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 92.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12311416 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5844382 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 79.87,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14129043 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132587577 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.313,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "897882908 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 14.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85140668 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 33.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34085438 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 78.71,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "15204343 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 106.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11200962 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 170.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "7295899 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 110,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11142541 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 310.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3787648 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 107.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10302885 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 310.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3987882 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 2.603,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "476339263 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.458,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "210720548 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.328,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "366207996 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199539974 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.019,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "135404373 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.915,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "130794320 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 91.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13378956 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 312.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3771868 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3717,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22178870 times\n2 procs"
          }
        ]
      }
    ]
  }
}