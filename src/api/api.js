import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-front.framework.team/",
});

export const getArtInfo = async () => {
  const authors = await instance.get("authors").then((response) => {
    return {
      data: response.data,
    };
  });
  const locations = await instance.get("locations").then((response) => {
    return {
      data: response.data,
    };
  });
  return { authors, locations };
};

export const getGalleryData = async ({
  currentPage = 1,
  name,
  authorId,
  locationId,
  rangeStart,
  rangeEnd,
}) => {
  const request = await instance
    .get("paintings", {
      params: {
        _page: currentPage,
        _limit: 12,
        q: name || undefined,
        authorId: authorId || undefined,
        locationId: locationId || undefined,
        created_gte: rangeStart || undefined,
        created_lte: rangeEnd || undefined,
      },
    })
    .then((response) => {
      return {
        data: response.data,
        filter: { name, authorId, locationId, rangeStart, rangeEnd },
      };
    });
  return request;
};
