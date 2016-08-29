function AutoInject() {
    return function(){};
}

@AutoInject()
export class B {

    updateDependencies({A}) {
    }

}
