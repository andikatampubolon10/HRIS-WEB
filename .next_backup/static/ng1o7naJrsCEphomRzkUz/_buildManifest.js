self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/api/v1/auth/:path*"
      },
      {
        "source": "/api/v1/logout"
      },
      {
        "source": "/api/v1/leave-requests/:path*"
      },
      {
        "source": "/api/v1/:path*"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()