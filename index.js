import React from 'react'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import SelectDisplay from './SelectDisplay';

const index = () => {
return (
    <div>
<ReactMultiSelectCheckboxes
    placeholderButtonLabel="Invoice View"
    getDropdownButtonLabel={(props) => {
        if (!props?.value?.length) {
            return props.placeholderButtonLabel;
        }
        return (
            <SelectDisplay
                values={props.value}
                options={rest?.options || []}
            />
        );
    }}
    // value="coe_accepted"
    className={className}
    {...rest}
/>
</div>
  )
}

export default index