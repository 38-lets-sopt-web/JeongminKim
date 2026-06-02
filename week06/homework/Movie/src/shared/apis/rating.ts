import instance from "@shared/apis/instance";

const GUEST_SESSION_KEY = "tmdb_guest_session_id";

type GuestSessionResponse = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

type RatingResponse = {
  success: boolean;
  status_code: number;
  status_message: string;
};

export const getGuestSessionId = async (): Promise<string> => {
  const cached = localStorage.getItem(GUEST_SESSION_KEY);
  if (cached) return cached;

  const { data } = await instance.get<GuestSessionResponse>(
    "/authentication/guest_session/new"
  );
  localStorage.setItem(GUEST_SESSION_KEY, data.guest_session_id);
  return data.guest_session_id;
};

export const postRating = async (
  movieId: number,
  value: number,
  guestSessionId: string
): Promise<void> => {
  await instance.post<RatingResponse>(
    `/movie/${movieId}/rating`,
    { value },
    { params: { guest_session_id: guestSessionId } }
  );
};

export const deleteRating = async (
  movieId: number,
  guestSessionId: string
): Promise<void> => {
  await instance.delete<RatingResponse>(`/movie/${movieId}/rating`, {
    params: { guest_session_id: guestSessionId },
  });
};
