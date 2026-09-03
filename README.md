# ZMath - 数学思维训练快应用

> **2026 首届 openVela AI 硬件开发者大赛 - 快应用赛道**
> 队伍编号：116 | 队伍名称：创造钟

---

## 作品简介

视频链接:https://www.bilibili.com/video/BV11kga6FEJb/?spm_id_from=333.1387.homepage.video_card.click&vd_source=b2c016b34a91791c5155677d95d1cd61

<img width="232" height="255" alt="屏幕截图 2026-07-24 173008" src="https://github.com/user-attachments/assets/ae5779a3-b69e-4a10-a986-e823bbfbc277" />


ZMath 是一款适用于小米 openVela 手环/手表的数学思维训练快应用。包含 24点游戏 和 口算训练 两大功能模块，全部通过触摸拖拽/点选操作，无需键盘输入，完美适配小屏设备。

| 功能 | 说明 |
|------|------|
| 24点 | 随机生成4个数字(1-13)，通过拖拽/点选数字与运算符 + - * / 构建算式，点击确认自动验算是否等于24。括号成对插入，支持逐步调整 |
| 口算训练 | 内置解方程与四则运算两大题库（各20题），支持随机出题、选项作答、即时反馈、成绩统计 |
| 积分系统 | 答对一题得1积分，积分持久化存储，在主页面实时显示 |

### 交互特点

## 作品结构

```
contest2026_116_chuangzaozhong/
├── quickapp/                    # ZMath 快应用项目
│   ├── package.json             # 构建依赖（aiot-toolkit）
│   └── src/                     # 快应用源码
│       ├── app.ux
│       ├── manifest.json
│       ├── pages/
│       │   ├── index/index.ux
│       │   ├── game24/index.ux
│       │   ├── mental/index.ux
│       │   └── mental-quiz/index.ux
│       ├── common/logo.png
│       ├── i18n/
│       └── style/comm.css
├── logs/                        # AI Coding 日志
└── README.md
```

## 技术实现

- 框架：openVela 快应用框架
- 数据存储：@system.storage
- 路由：@system.router
- 设计宽度：480px（适配手表）
- AI 工具：Cline (VS Code Extension)

## 构建方式

需要 Node.js（建议 ≥16）。在仓库根目录执行：

```bash
cd quickapp/
npm install      # 安装构建依赖（aiot-toolkit）
npm run build    # 等价于 npx aiot build，构建产物输出到 build/ 目录
```

如需发布版 rpk 包，执行 `npm run release`（产物在 `dist/` 目录）。

## 开发日志

| 日期 | 内容 |
|------|------|
| 2026-07-13 | 项目初始化，创建 ZMath 应用架构 |
| 2026-07-24 | 完成所有功能开发与构建修复 |
| 2026-07-24 | 提交参赛代码 |

- 纯触摸操作，拖拽 + 点选双模式
- 专为 432x514 手表屏幕优化
- 深色主题，低功耗 OLED 友好
- 口算训练可随时退出，作答数量灵活
