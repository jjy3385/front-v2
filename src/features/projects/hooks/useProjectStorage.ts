import { useMutation } from '@tanstack/react-query'

import type {
  PrepareUploadPayload,
  PrepareUploadResponse,
  RegisterYoutubeSourcePayload,
  RegisterYoutubeSourceResponse,
} from '@/entities/project/types'
import { prepareFileUpload, registerYoutubeSource } from '@/features/projects/api/storageApi'
// import { useUiStore } from '@/shared/store/useUiStore'

export function usePrepareUploadMutation() {
  return useMutation<PrepareUploadResponse, Error, PrepareUploadPayload>({
    mutationKey: ['projects', 'prepare-upload'],
    mutationFn: prepareFileUpload,
    onSuccess: () => {},
  })
}

export function useRegisterYoutubeSourceMutation() {
  return useMutation<RegisterYoutubeSourceResponse, Error, RegisterYoutubeSourcePayload>({
    mutationKey: ['projects', 'register-youtube'],
    mutationFn: registerYoutubeSource,
    onSuccess: () => {},
  })
}
