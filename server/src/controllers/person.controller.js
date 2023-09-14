import responseHanlder from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";

const personDetail = async (req, res) => {
  try {
    const { personId } = req.params;
    const person = await tmdbApi.personDetail({ personId });
    responseHanlder.ok(res, person);
  } catch {
    responseHanlder.error(res);
  }
};

const personMedias = async (req, res) => {
  try {
    const { personId } = res.params;
    const medias = await tmdbApi.personMedias({ personId });
    responseHanlder.ok(res, medias);
  } catch {
    responseHanlder.error(res);
  }
};

export default {
  personDetail,
  personMedias,
};
