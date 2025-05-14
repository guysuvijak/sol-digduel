interface DataProps {
    publicKey: string | null;
    imageBlob: Blob;
}

export const sendWebhookDiscordShare = async (data: DataProps) => {
    try {
        const formData = new FormData();
        formData.append('publicKey', data.publicKey || 'Anonymous Player');
        formData.append('file', data.imageBlob, 'digduel-score.png');

        const response = await fetch(
            'https://expressjs-minesweeper-api.vercel.app/discord-webhook',
            {
                method: 'POST',
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error calling webhook API:', error);
        throw error;
    }
};
