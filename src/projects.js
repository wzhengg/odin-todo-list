import Project from './project';

const projects = (() => {
    const _projects = [];

    const _defaultProject = new Project('Default');
    _projects.push(_defaultProject);

    function getProjects() {
        return _projects;
    }

    function add(project) {
        _projects.push(project);
    }

    function remove(index) {
        _projects.splice(index, 1);
    }

    return {
        getProjects,
        add,
        remove
    };
})();

export default projects;