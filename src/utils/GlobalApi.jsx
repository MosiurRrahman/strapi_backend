const { default: axios } = require("axios");


const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api"
})

const getHero = () => axiosClient.get("/home?populate[hero][populate]=*");
const getPartnerLogo = () => axiosClient.get("/home?populate[partner_section][populate]=*")
const getAbout = () => axiosClient.get("/home?populate[about][populate]=*")
const getSolutionAccrodion = () => axiosClient.get("/home?populate[solutions][populate][accordion][populate]=*")
const getSolution = () => axiosClient.get("/home?populate[solutions][populate]=*")
const getWorkSection = () => axiosClient.get("/home?populate[work_section][populate]=*")
const getWorkSectionCard = () => axiosClient.get("/home?populate[work_section][populate][worok_card][populate]=*")

export default {
  getHero,
  getPartnerLogo,
  getAbout,
  getSolution,
  getSolutionAccrodion,
  getWorkSection,
  getWorkSectionCard
}