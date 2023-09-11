import request from "@/utils/reuqest";

export const code =() => request({
  url: '/prod-api/captchImage',
  method: 'get'
})