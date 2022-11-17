import React from 'react';

const SelectDisplay = ({ values, options }) => {
	const val = values;
	const labels = typeof val === 'object' ? val?.map((p) => p?.label) : val;
	const getvalue = options.filter((item) => item.value === labels);
	const disp = typeof labels === 'object' ? labels : labels[0];
	return (
		<div>
			{typeof disp === 'object'
				? `${disp[0]}${val.length > 1 ? `+ ${val.length - 1}` : ''}`
				: getvalue[0]?.label}
		</div>
	);
};

export default SelectDisplay;
