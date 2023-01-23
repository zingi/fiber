window.BENCHMARK_DATA = {
  "lastUpdate": 1674497898655,
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
      },
      {
        "commit": {
          "author": {
            "email": "dozheiny@gmail.com",
            "name": "Iliya",
            "username": "dozheiny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0004cf8a82d57a00d7078b8cdbdbbe356934957",
          "message": "🔥 write integer Query Parser. (#2306)\n\n* Feature: write integer Query Parser.\r\n\r\n* request changes on https://github.com/gofiber/fiber/pull/2306#discussion_r1082171003\r\n\r\n* ref(test): separate test cases for QueryInt",
          "timestamp": "2023-01-23T19:06:12+01:00",
          "tree_id": "26625ba2ad16be96c9a6d7e99815dd7d92030413",
          "url": "https://github.com/gofiber/fiber/commit/a0004cf8a82d57a00d7078b8cdbdbbe356934957"
        },
        "date": 1674497842231,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1449,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "768720 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 7411,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "154491 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7579,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "162650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 178.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6809748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17562300 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13310421 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 267.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4638418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 328.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3551422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.554,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "468425943 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1185,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "977707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 891,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1359915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3161,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "354349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1609,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "685198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1469,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "751962 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 145.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8180142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6860683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7909887 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 364.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3283040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1903,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "566721 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 644.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1893552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 148.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8182750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5495685 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 303.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3964137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 286.6,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4076086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 542.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2297695 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 48.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24148592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 98.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12564825 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 44.67,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "24766395 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 54.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21692905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 801.8,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1502421 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 80.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14379597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 358.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3153482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5338,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "214827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65040763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 191.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6108762 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 357.5,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3353445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 504.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2302704 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2359,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "463304 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 174.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6471325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1389,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "859294 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 291.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4110942 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 938.2,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1269313 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 907.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1310376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 885,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1364449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 866.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1398123 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 234.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5053303 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.485,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "184726642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 65.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17290909 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23589618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 113.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10573092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 123.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9592125 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 57.61,
            "unit": "ns/op\t      66 B/op\t       0 allocs/op",
            "extra": "17973868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 201,
            "unit": "ns/op\t      96 B/op\t       1 allocs/op",
            "extra": "6093315 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 58.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19760886 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4594,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "232286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3975,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "292002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4970,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "222144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5098,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "230208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1397,
            "unit": "ns/op\t     784 B/op\t       8 allocs/op",
            "extra": "783021 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7189,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "153338 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7611,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "154839 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 170.3,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7016199 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 54.96,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "21722336 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 70.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16773686 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.334,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275628884 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.925,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203305051 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.596,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "215361669 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1069,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1068,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 205.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5879510 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 187.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6521797 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 660,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1780681 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 676.9,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1820707 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 838253,
            "unit": "ns/op\t  373004 B/op\t    5608 allocs/op",
            "extra": "1446 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10914853 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 30.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39675220 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.894,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "303636690 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "383789728 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 180.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6505810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 250.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4831470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 186.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6527484 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 302986,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3817 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 234065,
            "unit": "ns/op\t   24597 B/op\t    1000 allocs/op",
            "extra": "5162 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 192904,
            "unit": "ns/op\t     663 B/op\t       0 allocs/op",
            "extra": "6141 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 565.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2121816 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 479.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2543722 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 947.1,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1205614 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 589.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2042474 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2318,
            "unit": "ns/op\t     325 B/op\t       7 allocs/op",
            "extra": "724348 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2723,
            "unit": "ns/op\t     621 B/op\t       7 allocs/op",
            "extra": "702360 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1624,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "753326 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1968,
            "unit": "ns/op\t     272 B/op\t       5 allocs/op",
            "extra": "696134 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2037,
            "unit": "ns/op\t     263 B/op\t       5 allocs/op",
            "extra": "754914 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 135.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8809038 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 122.6,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9840074 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 60.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "19299002 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 23.92,
            "unit": "ns/op\t 543.43 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "48956082 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 55.75,
            "unit": "ns/op\t 233.20 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21209366 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 856.7,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1376536 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 155.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7710748 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 550.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2146141 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 361.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3290838 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 419.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2866766 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 789.4,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1528935 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 467.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2540281 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 821,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1455331 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 28193,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "43795 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 28254,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "42543 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 72.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17075296 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 150.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7901425 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 55.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21000088 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 168.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7041903 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 21.68,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "50447910 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 22.43,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49729724 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 21.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51720637 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 24.55,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47677485 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 34.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "33944959 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 36.48,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "31022834 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 121.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9665793 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 350.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3309218 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 81.21,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14626831 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 571.6,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2126726 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 39.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30639976 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8928,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 33.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "30794572 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.012,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "596200748 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 39.34,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "28573249 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 90.66,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "13208463 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 97.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12083332 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 194.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6268594 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 83.23,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14435397 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.082,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "130702057 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.385,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "867205167 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 12.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83101117 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 31.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36055963 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 80.19,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14333984 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 104.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11624107 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 176.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6984745 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 118.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10137025 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 304.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3912338 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 98.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10592233 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 312.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3932724 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 4.368,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270916100 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.251,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225614181 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "359042656 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198228328 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132437754 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.799,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "136301419 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 98.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12181531 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 299.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3948556 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4463,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 69.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17646075 times\n2 procs"
          }
        ]
      }
    ]
  }
}