import React from 'react';
import { Item } from '@react-stately/collections';
import { useButton } from '@react-aria/button';
import { useComboBoxState } from '@react-stately/combobox';
import { useComboBox } from '@react-aria/combobox';
import { useFilter } from '@react-aria/i18n';

// Reuse the ListBox and Popover from your component library. See below for details.
import { ListBox, Popover } from 'your-component-library';

export function ComboBox(props: any) {
    // Setup filter function and state.
    let { contains } = useFilter({ sensitivity: 'base' });
    let state = useComboBoxState({ ...props, defaultFilter: contains });

    // Setup refs and get props for child elements.
    let buttonRef = React.useRef(null);
    let inputRef = React.useRef(null);
    let listBoxRef = React.useRef(null);
    let popoverRef = React.useRef(null);

    let {
        buttonProps: triggerProps,
        inputProps,
        listBoxProps,
        labelProps,
    } = useComboBox(
        {
            ...props,
            inputRef,
            buttonRef,
            listBoxRef,
            popoverRef,
        },
        state,
    );

    // Call useButton to get props for the button element. Alternatively, you can
    // pass the triggerProps to a separate Button component using useButton
    // that you might already have in your component library.
    let { buttonProps } = useButton(triggerProps, buttonRef);

    return (
        <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
            <label {...labelProps}>{props.label}</label>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <input
                    {...inputProps}
                    ref={inputRef}
                    style={{
                        height: 24,
                        boxSizing: 'border-box',
                        marginRight: 0,
                        fontSize: 16,
                    }}
                />
                <button
                    {...buttonProps}
                    ref={buttonRef}
                    style={{
                        height: 24,
                        marginLeft: 0,
                    }}
                >
                    <span aria-hidden="true" style={{ padding: '0 2px' }}>
                        ▼
                    </span>
                </button>
                {state.isOpen && (
                    <Popover popoverRef={popoverRef} isOpen={state.isOpen} onClose={state.close}>
                        <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
                    </Popover>
                )}
            </div>
        </div>
    );
}
