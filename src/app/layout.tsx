import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trạng Nguyên Tiếng Việt - Game Phiêu Lưu Thành Ngữ',
  description: 'Game giáo dục tiếng Việt cho trẻ em - Học thành ngữ tục ngữ qua bản đồ Việt Nam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
