// Next.js 15 - src/components/modal/MultiplayerModal.tsx
'use client';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Trophy, Users } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useCommonStore } from '@/stores';
import { toast } from 'sonner';

export const MultiplayerModal = () => {
    const { t } = useTranslation();
    const { isMenuMultiplayerOpen, setIsMenuMultiplayerOpen } =
        useCommonStore();

    const handleButtonClick = () => {
        setIsMenuMultiplayerOpen(false);
        toast(t('mainmenu.multiplayer.feature-not-available'));
    };

    return (
        <Dialog
            open={isMenuMultiplayerOpen}
            onOpenChange={setIsMenuMultiplayerOpen}
        >
            <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                    <DialogTitle>{t('mainmenu.multiplayer.title')}</DialogTitle>
                    <DialogDescription>
                        {t('mainmenu.multiplayer.description')}
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-3 py-4'>
                    <Button
                        variant='outline'
                        className='h-16 justify-between'
                        onClick={handleButtonClick}
                    >
                        <div className='flex items-center gap-3'>
                            <Badge
                                variant='outline'
                                className='h-8 w-8 rounded-full p-0 flex items-center justify-center'
                            >
                                <Users className='h-4 w-4' />
                            </Badge>
                            <div className='text-left'>
                                <div className='font-semibold'>
                                    {t('mainmenu.multiplayer.casual-title')}
                                </div>
                                <div className='text-xs text-muted-foreground'>
                                    {t('mainmenu.multiplayer.casual-desc')}
                                </div>
                            </div>
                        </div>
                        <ChevronRight className='h-5 w-5' />
                    </Button>

                    <Button
                        variant='outline'
                        className='h-16 justify-between'
                        onClick={handleButtonClick}
                    >
                        <div className='flex items-center gap-3'>
                            <Badge
                                variant='outline'
                                className='h-8 w-8 rounded-full p-0 flex items-center justify-center'
                            >
                                <Trophy className='h-4 w-4' />
                            </Badge>
                            <div className='text-left'>
                                <div className='font-semibold'>
                                    {t('mainmenu.multiplayer.rank-title')}
                                </div>
                                <div className='text-xs text-muted-foreground'>
                                    {t('mainmenu.multiplayer.rank-desc')}
                                </div>
                            </div>
                        </div>
                        <ChevronRight className='h-5 w-5' />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
