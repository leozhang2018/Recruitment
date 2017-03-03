import axios from 'axios'

const Category = {
  SOCIAL: 'social',
  CAMPUS: 'campus'
}

const requestURL = {
  social: '/static/data/social/jobs.json',
  campus: '/static/data/campus/jobs.json'
}

const deptsCache = {}

class Department {
  constructor ({code, name, img, order, jobs = []}) {
    this.code = code
    this.name = name
    this.img = img
    this.order = order
    this.jobs = jobs
  }
}

class Job {
  constructor ({title, locations = [], time, responsibilities = [], requirements = [], pro = ['hr@qiniu.com']}) {
    this.title = title
    this.locations = locations.join(',')
    this.time = time
    this.responsibilities = responsibilities
    this.requirements = requirements
    this.pro = pro
  }
}

function getRequestURL (category = Category.SOCIAL) {
  return requestURL[category]
}

function getDepartments (category) {
  if (!deptsCache[category] || !deptsCache[category].length) {
    return axios.get(getRequestURL(category), {
      headers: { 'Cache-Control': 'no-cache' }
    }).then(response => {
      deptsCache[category] = response.data.map(v => {
        if (v.jobs && Array.isArray(v.jobs)) {
          v.jobs = v.jobs.map(j => { return new Job(j) })
        }
        return new Department(v)
      })
      return deptsCache[category]
    }).catch(error => {
      console.error('load jobs error:', error)
    })
  }
  return new Promise(resolve => resolve(deptsCache[category]))
}

function getSocialDepartments () {
  return getDepartments(Category.SOCIAL)
}

function getCampusDepartments () {
  return getDepartments(Category.CAMPUS)
}

export {getSocialDepartments, getCampusDepartments}
