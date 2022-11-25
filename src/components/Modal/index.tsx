import * as Dialog from '@radix-ui/react-dialog';

export function ModalCart() {
    return (
        <Dialog.Root >
    
        <Dialog.Trigger asChild>
            
        </Dialog.Trigger>
        <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content >
            <Dialog.Description>
           
            </Dialog.Description>
           
            <Dialog.Close>
                
            </Dialog.Close>
            <Dialog.Close asChild>
             
            </Dialog.Close>
        </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
    )
}