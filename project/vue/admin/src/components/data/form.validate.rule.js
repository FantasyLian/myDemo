const checkForm = {
    account: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    passwd: [
      { required: true, message: '请选择活动区域', trigger: 'change' }
    ]
}

export {
    checkForm
}