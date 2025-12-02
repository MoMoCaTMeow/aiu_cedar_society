import { config, fields, collection } from '@keystatic/core';

export default config({
    cloud: {
        project: 'aiu-cedar-society/aiucedarsociety',
    },
    storage: process.env.NODE_ENV === 'development'
        ? {
            kind: 'local',
        }
        : {
            kind: 'github',
            repo: {
                owner: 'MoMoCaTMeow',
                name: 'aiu_cedar_society',
            },
        },
    collections: {
        lectures: collection({
            label: '講演会 (Lectures)',
            slugField: 'title',
            path: 'src/content/lectures/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'タイトル' } }),
                date: fields.date({ label: '開催日' }),
                speaker: fields.text({ label: '講師名' }),
                speakerBio: fields.text({ label: '講師プロフィール', multiline: true }),
                summary: fields.text({ label: '概要', multiline: true }),
                coverImage: fields.image({
                    label: 'カバー画像',
                    directory: 'public/images/lectures',
                    publicPath: '/images/lectures',
                }),
                content: fields.document({
                    label: 'レポート / 本文',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/lectures/content',
                        publicPath: '/images/lectures/content',
                    },
                }),
            },
        }),
    },
});
