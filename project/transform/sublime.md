#生成标签
- 快速生成文档结构
    +  `!` 或 'html:5'
- 生成兄弟元素
    +  `div+p+div`
- 生成上级元素
    +  `p^div`
- 生成带自定义属性
    +  `div[value="1"]`
- 生成带文本内容
    +  `a{Click me}`
- 加编号
    +  从1开始，加$
        *  `div.item${$$}*3*`
    +  倒叙： $后面增加@-
        *  `div.item$@-{$$@-}`
    +  指定序号，使用@N
        *  `div.item$@4{$$@4}*3`
    +  分组
        *  `(ul>ol)*3`
    +  综合：
        *  `table#tab[value="1].a>tr*3(td{$$}>span)*3`
------------------------------------------------------
## 快捷键
-删除标签：shift+ctrl+;
-定位到上个编辑点：ctrl+alt+left
-定位到下个编辑点：ctrl+alt+right
-选中下一项：shift+ctrl+.
-加/减1：ctrl+up/ctrl+down
-加/减10：shift+alt+up/shift+alt+down
-展开缩写：ctrl+e（和tab键作用相同）
-重命名标签(rename_tag)：ctrl+shift+'
-更换标签(update_as_you_type)：ctrl+Shift+U
-匹配标签对：ctrl+alt+j
