import request from "@/untils/request";
import qs from 'qs';
export function awsl(params) {
  return request(`/api/awsl?${qs.stringify(params)}`);
}