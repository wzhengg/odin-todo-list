import PubSub from 'pubsub-js';
import { NEW_PROJECT } from './topics';
import Project from './project';

const projects = (() => {
    const _projects = [];

    const _defaultProject = new Project('Default');
    add(_defaultProject);

    function getProjects() {
        return _projects;
    }

    function add(project) {
        _projects.push(project);
        PubSub.publish(NEW_PROJECT, project);
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