export const bar = {};
// import React from 'react';
// import { ListProps, useListState } from '@react-stately/list';
// import { Item } from '@react-stately/collections';
// import { useFocusRing } from '@react-aria/focus';
// import { mergeProps } from '@react-aria/utils';
// import { useListBox, useOption } from '@react-aria/listbox';

// export function ListBox<T extends object>(props: ListProps<T>) {
//     let state = useListState(props);

//     let ref = React.useRef(null);
//     let { listBoxProps, labelProps } = useListBox(props, state, ref);

//     return (
//         <>
//             <div {...labelProps}>{props.label}</div>
//             <ul
//                 {...listBoxProps}
//                 ref={ref}
//                 style={{
//                     padding: 0,
//                     margin: '5px 0',
//                     listStyle: 'none',
//                     border: '1px solid gray',
//                     maxWidth: 250,
//                 }}
//             >
//                 {[...state.collection].map(item => (
//                     <Option key={item.key} item={item} state={state} />
//                 ))}
//             </ul>
//         </>
//     );
// }

// function Option({ item, state }) {
//     // Get props for the option element
//     let ref = React.useRef(null);
//     let { optionProps, isSelected, isDisabled } = useOption({ key: item.key }, state, ref);

//     // Determine whether we should show a keyboard
//     // focus ring for accessibility
//     let { isFocusVisible, focusProps } = useFocusRing();

//     return (
//         <li
//             {...mergeProps(optionProps, focusProps)}
//             ref={ref}
//             style={{
//                 background: isSelected ? 'blueviolet' : 'transparent',
//                 color: isSelected ? 'white' : null,
//                 padding: '2px 5px',
//                 outline: isFocusVisible ? '2px solid orange' : 'none',
//             }}
//         >
//             {item.rendered}
//         </li>
//     );
// }
