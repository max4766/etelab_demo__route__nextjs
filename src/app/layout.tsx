import './globals.css';

const navItems = [
  { id: 1, 
    name: '시험의뢰관리',
    route: '/testRequestManage'
  },
  { id: 2, 
    name: '샘플관리',
    route: '/sampleManage'
  },
  { id: 3, 
    name: '부적합관리',
    route: '/nonConformanceReportManage'
  },
  { id: 4, 
    name: 'SPEC관리',
    route: '/specManage'
  },
  { id: 5, 
    name: '게시판',
    route: '/noticeBoard'
  },
  { id: 6, 
    name: '시스템관리',
    route: '/systemManage'
  },
  { id: 7, 
    name: '시스템설정',
    route: '/systemSetting'
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className="topNav">
          <div className="topNavLogo">
            <a href="/">
              <img src="/img/etevers.png" alt="Logo"/>
            </a>
          </div>
          <ul className="topNavList">
            {navItems.map((item) => (
              <li key={item.id} className="topNavListItem">
                <a href={item.route}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="topNavDashBoard">
            <li className="topNavDashBoardItem">User</li>
            <li className="topNavDashBoardItem">Logout</li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  )
}
