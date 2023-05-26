<script setup lang="ts">
const props: Readonly<{
    info_supervisor?: string,
    info_budget?: string,
    info_start_date?: string,
    info_end_date?: string
}> = defineProps(['info_supervisor', 'info_budget', 'info_start_date', 'info_end_date']);
</script>

<template>
    <div id="project_infos" class="project-infos-div bg-red-400 divide-y divide-slate-700">
        <ProjectsProjectInfoRow :info_name="'Supervisor'" :info_value="props.info_supervisor"
                                :svg_path="'M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm260 321H220q-24.75 0-42.375-17.625T160-220v-34q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v34q0 24.75-17.625 42.375T740-160Zm-520-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z'"/>
        <ProjectsProjectInfoRow :info_name="'Budget'" :info_value="props.info_budget"
                                :svg_path="'M481-120q-13 0-21.5-8.5T451-150v-54q-48-8-82-34t-53-66q-5-11 0-23t17-17q11-5 22.5 0t17.5 16q18 34 47 51t67 17q48 0 79-24t31-66q0-44-27.5-68T466-467q-72-23-107.5-61T323-623q0-55 35.5-92t92.5-42v-53q0-13 8.5-21.5T481-840q13 0 21.5 8.5T511-810v53q36 5 64.5 22t47.5 44q7 10 3 21.5T610-653q-11 5-23 1t-20-15q-14-18-34.5-26.5T483-702q-46 0-73 21t-27 57q0 38 30 61.5T524-514q68 21 100.5 60.5T657-354q0 63-37 101.5T511-203v53q0 13-8.5 21.5T481-120Z'"/>
        <ProjectsProjectInfoRow :info_name="'Start Date'" :info_value="props.info_start_date"
                                :svg_path="'M352.817-310Q312-310 284-338.183q-28-28.183-28-69T284.183-476q28.183-28 69-28T422-475.817q28 28.183 28 69T421.817-338q-28.183 28-69 28ZM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q310-861.6 310-848v28h340v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q715-861.6 715-848v28h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z'"/>
        <ProjectsProjectInfoRow :info_name="'End Date'" :info_value="props.info_end_date"
                                :svg_path="'M596.817-220Q556-220 528-248.183q-28-28.183-28-69T528.183-386q28.183-28 69-28T666-385.817q28 28.183 28 69T665.817-248q-28.183 28-69 28ZM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q310-861.6 310-848v28h340v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q715-861.6 715-848v28h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z'"/>
    </div>
</template>

<style scoped>

</style>