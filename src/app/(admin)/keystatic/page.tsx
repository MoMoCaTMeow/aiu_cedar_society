'use client';

import { makePage } from '@keystatic/next/ui/app';
import config from '../../../../keystatic.config';

const KeystaticPage = makePage(config);

export default function Page() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <KeystaticPage />
        </div>
    );
}
