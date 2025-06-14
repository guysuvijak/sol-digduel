// Next.js 15 - src/components/mainmenu/QuestCard.tsx
'use client';
import { useTranslation } from '@/hooks/useTranslation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface QuestCardProps {
    questId: number;
    progress: number;
    total: number;
    reward: number;
    completed?: boolean;
}

const QuestCard = ({
    questId,
    progress,
    total,
    reward,
    completed = false
}: QuestCardProps) => {
    const { t } = useTranslation();
    const progressPercent = (progress / total) * 100;

    return (
        <Card
            className={cn(
                'border overflow-hidden transition-all duration-200',
                completed ? 'border-primary' : 'border-muted'
            )}
        >
            <CardContent className='p-4'>
                <div className='flex justify-between items-start mb-2'>
                    <h3 className='font-semibold'>
                        {t(`quest.quest-${questId}.title`)}
                    </h3>
                    <Badge
                        variant={completed ? 'default' : 'outline'}
                        className='gap-1'
                    >
                        {t('quest.points', { point: reward })}
                    </Badge>
                </div>
                <p className='text-sm text-muted-foreground mb-3'>
                    {t(`quest.quest-${questId}.description`)}
                </p>
                <div className='space-y-2'>
                    <div className='flex justify-between text-xs'>
                        <span>
                            {progress} / {total}
                        </span>
                        {completed && (
                            <span className='text-primary'>
                                {t('quest.complete')}
                            </span>
                        )}
                    </div>
                    <div className='h-2 bg-muted rounded-full overflow-hidden'>
                        <div
                            className={cn(
                                'h-full rounded-full',
                                completed ? 'bg-primary' : 'bg-primary/60'
                            )}
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export { QuestCard };
