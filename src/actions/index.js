export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selctId: peopleId,
    };
};

export const nonePerson = () => {
    return {
        type: 'NONE_SELECTED',
    };
};