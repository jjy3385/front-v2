import type {
  PrepareUploadPayload,
  PrepareUploadResponse,
  RegisterYoutubeSourcePayload,
  RegisterYoutubeSourceResponse,
} from '@/entities/project/types'
import { apiClient } from '@/shared/api/client'

const renameMap = {
  fileName: 'filename',
  projectId: 'project_id',
  contentType: 'content_type',
} as const

function remapKeys<T extends Record<string, any>>(obj: T) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [renameMap[k as keyof typeof renameMap] ?? k, v]),
  ) as unknown
}

export async function prepareFileUpload(payload: PrepareUploadPayload) {
  return apiClient
    .post('api/storage/prepare-upload', { json: remapKeys(payload) })
    .json<PrepareUploadResponse>()
}

export async function registerYoutubeSource(payload: RegisterYoutubeSourcePayload) {
  return apiClient
    .post('api/storage/register-source', { json: remapKeys(payload) })
    .json<RegisterYoutubeSourceResponse>()
}
