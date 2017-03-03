<template>
  <section>
    <departments-summary
      :departments="departments"
      :category="category"
      :routeFor="routeFor"
      v-if="!currentDept"
    >
    </departments-summary>

    <department-detail
      :departments="departments"
      :department="currentDept"
      :job="currentJob"
      :routeFor="routeFor"
      :defaultMail="defaultMail"
      v-else
    >
    </department-detail>
  </section>
</template>

<script>
  import DepartmentsSummary from './departments/Summary'
  import DepartmentDetail from './departments/Detail'

  export default {
    name: 'JobsDescription',
    components: {
      DepartmentsSummary,
      DepartmentDetail
    },
    props: {
      category: {
        type: String,
        required: true
      },
      departments: {
        type: Array,
        required: true
      },
      departmentCode: {
        type: String
      },
      jobID: {
      },
      defaultMail: {
        type: String
      },
      routeFor: {
        // should be a function to return a valid route location
        // according to the given department and optional job index.
        // means: function(dept: Department, idx?: int)
        type: Function,
        required: true
      }
    },
    computed: {
      currentDept () {
        return this.departments.find(d => { return d.code === this.departmentCode })
      },
      currentJob () {
        if (this.currentDept) {
          return this.currentDept.jobs[this.jobID]
        }
      }
    }
  }
</script>
