import React from "react"
import { connect } from "react-redux"
import { RootState } from "../../redux/store"
import MainLayout from "../../layouts/mainLayout"

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.pageA.loading,
    error: state.pageA.error,
    title: state.pageA.title,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    giveMeData: () => {},
  }
}

type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class PageAComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.giveMeData()
  }

  render() {
    const { title } = this.props
    return (
      <MainLayout>
        <div>标题</div>
        <div>{title}</div>
      </MainLayout>
    )
  }
}

const PageA = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(PageAComponent))

export default PageA
