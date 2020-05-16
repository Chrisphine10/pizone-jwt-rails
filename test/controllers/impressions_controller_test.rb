require 'test_helper'

class ImpressionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @impression = impressions(:one)
  end

  test "should get index" do
    get impressions_url, as: :json
    assert_response :success
  end

  test "should create impression" do
    assert_difference('Impression.count') do
      post impressions_url, params: { impression: { impression: @impression.impression, views: @impression.views } }, as: :json
    end

    assert_response 201
  end

  test "should show impression" do
    get impression_url(@impression), as: :json
    assert_response :success
  end

  test "should update impression" do
    patch impression_url(@impression), params: { impression: { impression: @impression.impression, views: @impression.views } }, as: :json
    assert_response 200
  end

  test "should destroy impression" do
    assert_difference('Impression.count', -1) do
      delete impression_url(@impression), as: :json
    end

    assert_response 204
  end
end
